import React, { useState } from 'react';
import { Check, Zap, Sparkles } from 'lucide-react';
import { GlassCard } from '@/components/common/GlassCard';
import { useAuth } from '@/context/AuthContext';

export function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { user, setIsUpgradeModalOpen } = useAuth();
  const isPro = user?.tier === 'pro';

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
            Annual <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full">Save 20%</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <GlassCard className="flex flex-col justify-between p-8 bg-slate-900 border border-slate-800">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Free Plan</h3>
            <div className="text-4xl font-extrabold text-white mb-6">
              $0 <span className="text-sm font-normal text-slate-400">/ forever</span>
            </div>
            <ul className="space-y-4 text-sm text-slate-300 mb-8">
              <li className="flex items-center space-x-3"><Check className="w-4 h-4 text-emerald-400" /><span>10 daily heuristic website checks</span></li>
              <li className="flex items-center space-x-3"><Check className="w-4 h-4 text-emerald-400" /><span>10 daily spam & phishing checks</span></li>
              <li className="flex items-center space-x-3"><Check className="w-4 h-4 text-emerald-400" /><span>Basic threat report breakdown</span></li>
            </ul>
          </div>
          <button disabled className="w-full py-3.5 rounded-xl bg-slate-800 text-slate-500 font-semibold cursor-not-allowed">
            Current Plan
          </button>
        </GlassCard>

        <GlassCard glow="cyan" className="flex flex-col justify-between p-8 border-cyan-500/40 relative bg-slate-900">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-indigo-600 text-slate-950 text-[10px] uppercase tracking-widest font-extrabold px-4 py-1 rounded-bl-xl">
            Recommended
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
              <span>Pro Plan</span>
              <Zap className="w-5 h-5 text-cyan-400 fill-cyan-400" />
            </h3>
            <div className="text-4xl font-extrabold text-white mb-6">
              ${isAnnual ? '12' : '15'} <span className="text-sm font-normal text-slate-400">/ month</span>
            </div>
            <ul className="space-y-4 text-sm text-slate-300 mb-8">
              <li className="flex items-center space-x-3"><Check className="w-4 h-4 text-cyan-400" /><span>Unlimited daily website & spam scans</span></li>
              <li className="flex items-center space-x-3"><Check className="w-4 h-4 text-cyan-400" /><span>Deep WHOIS, SSL, and domain age checks</span></li>
              <li className="flex items-center space-x-3"><Check className="w-4 h-4 text-cyan-400" /><span>Bulk URL batch testing & CSV exports</span></li>
              <li className="flex items-center space-x-3"><Check className="w-4 h-4 text-cyan-400" /><span>Formatted PDF security reports</span></li>
            </ul>
          </div>
          {isPro ? (
            <div className="w-full py-3.5 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-center border border-emerald-500/30">
              ✓ Pro Membership Active
            </div>
          ) : (
            <button
              onClick={() => setIsUpgradeModalOpen(true)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-xl hover:scale-105 transition-all flex items-center justify-center space-x-2"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Upgrade to Pro Now</span>
            </button>
          )}
        </GlassCard>
      </div>
    </div>
  );
}

