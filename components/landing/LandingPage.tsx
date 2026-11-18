import React from 'react';
import { HeroSection } from './HeroSection';
import { TrustStrip } from './TrustStrip';
import { HowItWorks } from './HowItWorks';
import { FeaturesSection } from './FeaturesSection';
import { DemoPreview } from './DemoPreview';
import { BentoGrid } from './BentoGrid';
import { PricingSection } from '../pricing/PricingSection';
import { TestimonialsSection } from './testimonials/TestimonialsSection';
import { FaqSection } from './FaqSection';
import { FinalCTA } from './FinalCTA';

interface LandingPageProps {
  onStartScanning: (url?: string) => void;
  onNavigatePricing: () => void;
  onNavigateDashboard: () => void;
}

export function LandingPage({ onStartScanning, onNavigatePricing, onNavigateDashboard }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      <HeroSection onStartScanning={onStartScanning} onNavigatePricing={onNavigatePricing} />
      <TrustStrip />
      <HowItWorks />
      <FeaturesSection />
      <DemoPreview />
      <BentoGrid />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCTA />
    </div>
  );
}

