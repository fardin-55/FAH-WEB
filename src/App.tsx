import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ScanQuotaProvider } from './context/ScanQuotaContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { LandingPage } from './components/landing/LandingPage';
import { DashboardPage } from './components/DashboardPage';
import { PricingPage } from './components/pricing/PricingPage';
import { AuthModal } from './components/auth/AuthModal';
import { UpgradeModal } from './components/pricing/UpgradeModal';

export function AppContent() {
  const [currentTab, setCurrentTab] = useState<'landing' | 'dashboard' | 'pricing'>('landing');
  const [initialUrl, setInitialUrl] = useState<string | undefined>(undefined);

  const handleStartScanning = (url?: string) => {
    if (url) setInitialUrl(url);
    setCurrentTab('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070b14] text-slate-800 dark:text-slate-100 font-sans selection:bg-brand-500 selection:text-white transition-colors duration-300">
      <Navbar currentTab={currentTab} onNavigate={(tab) => { setCurrentTab(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />

      <main className="flex-1">
        {currentTab === 'landing' && (
          <LandingPage
            onStartScanning={handleStartScanning}
            onNavigatePricing={() => { setCurrentTab('pricing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            onNavigateDashboard={() => { setCurrentTab('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          />
        )}
        {currentTab === 'dashboard' && (
          <DashboardPage initialUrl={initialUrl} />
        )}
        {currentTab === 'pricing' && (
          <PricingPage />
        )}
      </main>

      <Footer />
      <AuthModal />
      <UpgradeModal />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ScanQuotaProvider>
          <AppContent />
        </ScanQuotaProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
