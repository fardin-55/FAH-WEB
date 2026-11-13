import React from 'react';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onGetStarted: () => void;
  onUpgrade: () => void;
}

export function CtaBanner({ onGetStarted, onUpgrade }: CtaBannerProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden glass-panel dark:glass-panel-light p-8 sm:p-16 text-center border border-brand-500/30 shadow-2xl">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 via-indigo-500/10 to-cyan-500/10 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Secure Your Digital Footprint Today</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ready to Protect Yourself From Deceptive Phishing Scams?
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Start scanning URLs and checking spam messages instantly with our Free tier, or upgrade to Pro for deep WHOIS records and bulk analysis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-600 text-white font-bold shadow-lg shadow-brand-500/30 hover:scale-105 transition-all flex items-center justify-center space-x-2"
            >
              <span>Launch Free Scanner</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onUpgrade}
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-slate-900 dark:text-white font-bold hover:border-brand-500/50 transition-all flex items-center justify-center space-x-2"
            >
              <Zap className="w-4 h-4 text-brand-400 fill-brand-400" />
              <span>Explore Pro Plan</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
