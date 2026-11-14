import React from 'react';
import { SITE_CONFIG } from '@/config/site';
import { GlassCard } from '../common/GlassCard';

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SITE_CONFIG.features.map((f, i) => (
          <GlassCard key={i} glow={f.glow as any} className="p-8 hover:translate-y-[-4px] transition-transform duration-300">
            <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
            <p className="text-slate-400">{f.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
