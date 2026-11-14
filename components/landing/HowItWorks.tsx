import React from 'react';
import { SITE_CONFIG } from '@/config/site';

export function HowItWorks() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-16">How SpamShield works</h2>
      <div className="grid md:grid-cols-3 gap-12 relative">
        {SITE_CONFIG.steps.map((step, i) => (
          <div key={i} className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto mb-6 text-xl font-bold">
              {i + 1}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
            <p className="text-slate-400 max-w-[250px] mx-auto">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
