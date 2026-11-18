'use client';

import React, { useState } from 'react';
import { PRICING_CONFIG } from '@/config/pricing';
import { GlowCard } from '@/components/ui/GlowCard';
import { Button } from '@/components/ui/Button';
import { Check, Sparkles } from 'lucide-react';

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start free and scale as your security needs grow. No hidden fees.
          </p>
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-surface border border-border">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!isYearly ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isYearly ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Yearly <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 ml-1">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_CONFIG.plans.map((plan, idx) => {
            const price = isYearly ? `$${plan.price.yearly}` : `$${plan.price.monthly}`;
            return (
              <GlowCard
                key={idx}
                className={`p-8 flex flex-col justify-between ${plan.highlight ? 'border-cyan-500/50 bg-surface/85 shadow-2xl shadow-cyan-500/10' : 'border-border bg-surface/45'}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" /> Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-extrabold text-foreground font-mono">{price}</span>
                    <span className="text-sm text-muted-foreground">/{isYearly ? 'year' : 'month'}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  className="w-full"
                  variant={plan.highlight ? 'glow' : 'outline'}
                >
                  {plan.buttonText}
                </Button>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

