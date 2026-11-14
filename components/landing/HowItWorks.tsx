import React from 'react';
import { landingContent } from '@/config/content';
import { Reveal } from '@/components/ui/Reveal';

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-foreground mb-16">How ShieldScan Works</h2>
      <div className="grid md:grid-cols-3 gap-12 relative">
        {landingContent.howItWorks.map((step, i) => (
          <Reveal key={i} delay={i * 0.2}>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
