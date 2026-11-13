import React from 'react';
import { HeroSection } from './HeroSection';
import { BentoGrid } from './BentoGrid';
import { FaqSection } from './FaqSection';
import { CtaBanner } from './CtaBanner';

interface LandingPageProps {
  onStartScanning: (url?: string) => void;
  onNavigatePricing: () => void;
  onNavigateDashboard: () => void;
}

export function LandingPage({ onStartScanning, onNavigatePricing, onNavigateDashboard }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      <HeroSection onStartScanning={onStartScanning} onNavigatePricing={onNavigatePricing} />
      <BentoGrid />
      <FaqSection />
      <CtaBanner onGetStarted={onNavigateDashboard} onUpgrade={onNavigatePricing} />
    </div>
  );
}
