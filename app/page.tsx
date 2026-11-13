'use client';

import React, { useState } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { ScanQuotaProvider } from '@/context/ScanQuotaContext';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { LandingPage } from '@/components/landing/LandingPage';
import { DashboardPage } from '@/components/DashboardPage';
import { PricingPage } from '@/components/pricing/PricingPage';
import { AuthModal } from '@/components/auth/AuthModal';
import { UpgradeModal } from '@/components/pricing/UpgradeModal';

export default function HomePage() {
  const [currentTab, setCurrentTab] = useState<'landing' | 'dashboard' | 'pricing'>('landing');
  const [initialUrl, setInitialUrl] = useState<string | undefined>(undefined);

  const handleStartScanning = (url?: string) => {
    if (url) setInitialUrl(url);
    setCurrentTab('dashboard');
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AuthProvider>
      <ScanQuotaProvider>
        <div className="min-h-screen flex flex-col bg-[#070b14] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-300">
          <Navbar currentTab={currentTab} onNavigate={(tab) => { setCurrentTab(tab); if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' }); }} />

          <main className="flex-1">
            {currentTab === 'landing' && (
              <LandingPage
                onStartScanning={handleStartScanning}
                onNavigatePricing={() => { setCurrentTab('pricing'); if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                onNavigateDashboard={() => { setCurrentTab('dashboard'); if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              />
            )}
            {currentTab === 'dashboard' && <DashboardPage initialUrl={initialUrl} />}
            {currentTab === 'pricing' && <PricingPage />}
          </main>

          <Footer />
          <AuthModal />
          <UpgradeModal />
        </div>
      </ScanQuotaProvider>
    </AuthProvider>
  );
}

