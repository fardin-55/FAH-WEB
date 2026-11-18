import React from 'react';
import { TESTIMONIALS } from '@/config/testimonials';
import { GlassCard } from '../../common/GlassCard';

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-16">Trusted by professionals</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <GlassCard key={i} className="p-8">
              <p className="text-slate-300 italic mb-6">"{t.text}"</p>
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sm text-cyan-400">{t.role}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
