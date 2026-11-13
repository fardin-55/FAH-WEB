import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

interface ScanQuotaContextType {
  websiteScansRemaining: number;
  spamScansRemaining: number;
  consumeWebsiteScan: () => boolean;
  consumeSpamScan: () => boolean;
  maxDailyChecks: number;
}

const ScanQuotaContext = createContext<ScanQuotaContextType | undefined>(undefined);

const MAX_FREE_DAILY_CHECKS = 10;

export function ScanQuotaProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [websiteScansCount, setWebsiteScansCount] = useState<number>(0);
  const [spamScansCount, setSpamScansCount] = useState<number>(0);

  const getTodayKey = () => new Date().toISOString().split('T')[0];

  useEffect(() => {
    const today = getTodayKey();
    const savedDate = localStorage.getItem('trustscan_quota_date');
    if (savedDate !== today) {
      localStorage.setItem('trustscan_quota_date', today);
      localStorage.setItem('trustscan_web_count', '0');
      localStorage.setItem('trustscan_spam_count', '0');
      setWebsiteScansCount(0);
      setSpamScansCount(0);
    } else {
      setWebsiteScansCount(parseInt(localStorage.getItem('trustscan_web_count') || '0', 10));
      setSpamScansCount(parseInt(localStorage.getItem('trustscan_spam_count') || '0', 10));
    }
  }, []);

  const websiteScansRemaining = user?.tier === 'pro' 
    ? 999 
    : Math.max(0, MAX_FREE_DAILY_CHECKS - websiteScansCount);

  const spamScansRemaining = user?.tier === 'pro' 
    ? 999 
    : Math.max(0, MAX_FREE_DAILY_CHECKS - spamScansCount);

  const consumeWebsiteScan = (): boolean => {
    if (user?.tier === 'pro') return true;
    if (websiteScansCount >= MAX_FREE_DAILY_CHECKS) return false;

    const newCount = websiteScansCount + 1;
    setWebsiteScansCount(newCount);
    localStorage.setItem('trustscan_web_count', newCount.toString());
    return true;
  };

  const consumeSpamScan = (): boolean => {
    if (user?.tier === 'pro') return true;
    if (spamScansCount >= MAX_FREE_DAILY_CHECKS) return false;

    const newCount = spamScansCount + 1;
    setSpamScansCount(newCount);
    localStorage.setItem('trustscan_spam_count', newCount.toString());
    return true;
  };

  return (
    <ScanQuotaContext.Provider value={{
      websiteScansRemaining,
      spamScansRemaining,
      consumeWebsiteScan,
      consumeSpamScan,
      maxDailyChecks: MAX_FREE_DAILY_CHECKS
    }}>
      {children}
    </ScanQuotaContext.Provider>
  );
}

export function useScanQuota() {
  const context = useContext(ScanQuotaContext);
  if (!context) throw new Error('useScanQuota must be used within a ScanQuotaProvider');
  return context;
}
