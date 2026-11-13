import React from 'react';
import { useScanQuota } from '../../context/ScanQuotaContext';
import { useAuth } from '../../context/AuthContext';
import { Zap, ShieldCheck, AlertCircle } from 'lucide-react';

export function QuotaTracker() {
  const { websiteScansRemaining, spamScansRemaining, maxDailyChecks } = useScanQuota();
  const { user, setIsUpgradeModalOpen } = useAuth();

  const isPro = user?.tier === 'pro';

  return (
    <div className="glass-panel p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 border border-brand-500/20">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <span>Daily Scan Quota</span>
            {isPro && <span className="text-xs bg-brand-500/20 text-brand-400 px-2 py-0.5 rounded-full font-semibold">Unlimited Pro</span>}
          </div>
          <p className="text-xs text-slate-400">
            {isPro ? 'Pro membership active. Enjoy unlimited scans & exports.' : `Resets daily at midnight UTC (${maxDailyChecks} free checks per day)`}
          </p>
        </div>
      </div>

      {!isPro && (
        <div className="flex items-center space-x-6 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-right text-xs">
            <span className="block font-bold text-slate-900 dark:text-white">{websiteScansRemaining} URL / {spamScansRemaining} Spam</span>
            <span className="text-slate-400">Checks remaining today</span>
          </div>
          <button
            onClick={() => setIsUpgradeModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-600 text-white text-xs font-bold shadow-md hover:scale-105 transition-all flex items-center space-x-1"
          >
            <Zap className="w-3.5 h-3.5 fill-white" />
            <span>Go Pro</span>
          </button>
        </div>
      )}
    </div>
  );
}
