import React, { useState } from 'react';
import { ArrowRight, Globe, Sparkles, ShieldCheck, Lock, Zap } from 'lucide-react';
import { GlassCard } from '@/components/common/GlassCard';

interface HeroSectionProps {
  onStartScanning: (initialUrl?: string) => void;
  onNavigatePricing: () => void;
}

export function HeroSection({ onStartScanning, onNavigatePricing }: HeroSectionProps) {
  const [quickUrl, setQuickUrl] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickUrl.trim()) {
      onStartScanning(quickUrl.trim());
    } else {
      onStartScanning();
    }
  };

  return (
    <div className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6 shadow-lg animate-pulse">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Next-Gen Web Safety & Phishing Shield 2026</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6">
          Instantly Detect <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-indigo-500 bg-clip-text text-transparent">Deceptive Links</span> & Spam Text.
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          Protect yourself against homoglyph spoofing, malicious redirects, and phishing scams. Runs 100% privately in your browser with instant heuristic analysis.
        </p>

        <form onSubmit={handleQuickSubmit} className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row items-center p-2 rounded-2xl bg-slate-900 shadow-2xl border border-white/10 gap-2">
            <div className="flex items-center pl-3 w-full sm:w-auto flex-1">
              <Globe className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
              <input
                type="text"
                value={quickUrl}
                onChange={(e) => setQuickUrl(e.target.value)}
                placeholder="Paste website URL (e.g. secure-login.paypal.com.xyz)..."
                className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 flex-shrink-0"
            >
              <span>Scan Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 mb-16">
          <span className="font-medium text-slate-300">Try testing examples:</span>
          <button 
            onClick={() => onStartScanning('https://paypal-secure-update.xyz/login')}
            className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-rose-500/50 hover:text-rose-400 transition-all text-rose-300"
          >
            ⚠️ Phishing Simulation URL
          </button>
          <button 
            onClick={() => onStartScanning('https://github.com')}
            className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all text-emerald-300"
          >
            ✅ Safe Official Domain
          </button>
        </div>
      </div>
    </div>
  );
}
