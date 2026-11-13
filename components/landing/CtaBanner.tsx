import React from 'react';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onGetStarted: () => void;
  onUpgrade: () => void;
}

export function CtaBanner({ onGetStarted, onUpgrade }: CtaBannerProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden glass-panel p-8 sm:p-16 text-center border border-cyan-500/30 shadow-2xl bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-indigo-600/10 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Secure Your Digital Footprint Today</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Protect Yourself From Deceptive Phishing Scams?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Start scanning URLs and checking spam messages instantly with our Free tier, or upgrade to Pro for deep WHOIS records and bulk analysis.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all flex items-center justify-center space-x-2"
            >
              <span>Launch Free Scanner</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onUpgrade}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 text-white font-bold hover:border-cyan-500/50 border border-slate-700 transition-all flex items-center justify-center space-x-2"
            >
              <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <span>Explore Pro Plan</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
