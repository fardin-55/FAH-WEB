import React, { useState } from 'react';
import { Check, Zap, Sparkles } from 'lucide-react';
import { GlassCard } from '@/components/common/GlassCard';
import { useAuth } from '@/context/AuthContext';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import { PRICING_CONFIG } from '@/config/pricing';

export function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { user, setIsUpgradeModalOpen } = useAuth();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Flexible Plans for Everyone</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-slate-300 text-lg">
          Start for free with daily heuristic checks, or unlock unlimited professional security intelligence.
        </p>

        <div className="flex items-center justify-center space-x-4 mt-8">
          <span className={`text-sm font-semibold ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
          <button onClick={() => setIsAnnual(!isAnnual)} className="w-14 h-8 rounded-full bg-slate-900 border border-slate-800 p-1 relative">
            <div className={`w-6 h-6 rounded-full bg-cyan-500 shadow-md transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm font-semibold ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
            Annual <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full">{PRICING_CONFIG.monthlyDiscount}</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
        {PRICING_CONFIG.plans.map((plan, i) => (
          <GlassCard key={i} glow={plan.highlight ? "indigo" : undefined} className={`p-8 ${plan.highlight ? 'border-indigo-500/40 relative' : ''}`}>
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-500 to-cyan-600 text-slate-950 text-[10px] uppercase tracking-widest font-extrabold px-4 py-1 rounded-bl-xl">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-slate-400 text-sm mb-6 min-h-[3rem]">{plan.description}</p>
            <div className="text-4xl font-extrabold text-white mb-8">
              ${isAnnual ? plan.price.yearly / 12 : plan.price.monthly}
              <span className="text-sm font-normal text-slate-400">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => plan.highlight && setIsUpgradeModalOpen(true)}
              className={`w-full py-3 rounded-xl font-bold ${plan.highlight ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
              {plan.buttonText}
            </button>
          </GlassCard>
        ))}
      </div>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {PRICING_CONFIG.faq.map((item, i) => (
            <Accordion key={i}>
              <AccordionItem title={item.q}>{item.a}</AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>
    </div>
  );
}