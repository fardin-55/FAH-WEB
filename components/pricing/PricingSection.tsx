import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PRICING_CONFIG } from '@/config/pricing';
import { GlassCard } from '../common/GlassCard';

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Simple, transparent pricing</h2>
        <div className="flex items-center justify-center gap-4">
          <span className={!isYearly ? "text-white font-bold" : "text-slate-400"}>Monthly</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-8 bg-slate-800 rounded-full p-1 relative"
          >
            <div className={`w-6 h-6 bg-cyan-500 rounded-full transition-transform ${isYearly ? 'translate-x-6' : ''}`} />
          </button>
          <span className={isYearly ? "text-white font-bold" : "text-slate-400"}>Yearly ({PRICING_CONFIG.monthlyDiscount})</span>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {PRICING_CONFIG.plans.map((plan, i) => (
          <GlassCard key={i} glow={plan.highlight ? "indigo" : undefined} className={`p-8 ${plan.highlight ? 'border-indigo-500' : ''}`}>
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-slate-400 mb-6">{plan.description}</p>
            <div className="text-4xl font-bold text-white mb-6">
              ${isYearly ? plan.price.yearly / 12 : plan.price.monthly}
              <span className="text-lg text-slate-400 font-normal">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-slate-300">
                  <Check className="text-emerald-500 w-5 h-5" /> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-xl font-bold ${plan.highlight ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-white'}`}>
              {plan.buttonText}
            </button>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
