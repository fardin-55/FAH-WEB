import React from 'react';
import { landingContent } from '@/config/content';
import { GlowCard } from '@/components/ui/GlowCard';
import { Reveal } from '@/components/ui/Reveal';

export function BentoGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-extrabold text-foreground mb-4">Advanced Security Features</h2>
        <p className="text-muted-foreground">Everything you need to secure your online presence.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
        {landingContent.features.map((feature, i) => (
          <Reveal key={i} delay={i * 0.1} className={i % 3 === 0 ? "md:col-span-2" : ""}>
            <GlowCard className="h-full flex flex-col justify-center p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
