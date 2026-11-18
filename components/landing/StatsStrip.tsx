import React from 'react';
import { landingContent } from '@/config/content';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export function StatsStrip() {
  return (
    <section className="py-12 border-y border-border bg-surface/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {landingContent.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold font-mono text-foreground mb-1">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

