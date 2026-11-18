'use client';

import React from 'react';
import { PricingSection } from '@/components/pricing/PricingSection';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-muted-foreground">Choose the right security plan for your team or enterprise.</p>
      </div>
      <PricingSection />
    </div>
  );
}
