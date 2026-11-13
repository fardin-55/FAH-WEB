import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Zap, CheckCircle2, Globe, MessageSquareText, Lock, Sparkles } from 'lucide-react';
import { analyzeUrl } from '../../lib/scanner/urlParser';

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
    <div className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-mesh-dark dark:bg-mesh-dark">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel dark:glass-panel-light text-brand-400 text-xs font-semibold mb-6 shadow-lg border border-brand-500/30 animate-pulse">
          <Sparkles className="w-4 h-4 text-brand-400" />
          <span>Next-Gen Web Safety & Phishing Shield 2026</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-[1.1] mb-6">
          Instantly Detect <span className="bg-gradient-to-r from-brand-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">Deceptive Links</span> & Spam Text.
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
          Protect yourself against homoglyph spoofing, malicious redirects, and phishing scams. Runs 100% privately in your browser with instant heuristic analysis.
        </p>

        {/* Quick URL Input Bar */}
        <form onSubmit={handleQuickSubmit} className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row items-center p-2 rounded-2xl glass-panel dark:glass-panel-light shadow-2xl border border-white/15 gap-2">
            <div className="flex items-center pl-3 w-full sm:w-auto flex-1">
              <Globe className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
              <input
                type="text"
                value={quickUrl}
                onChange={(e) => setQuickUrl(e.target.value)}
                placeholder="Paste website URL (e.g. secure-login.paypal.com.xyz)..."
                className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-600 text-white font-semibold shadow-lg shadow-brand-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 flex-shrink-0"
            >
              <span>Scan Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Quick sample pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 mb-16">
          <span className="font-medium text-slate-300">Try testing examples:</span>
          <button 
            onClick={() => onStartScanning('https://paypal-secure-update.xyz/login')}
            className="px-3 py-1 rounded-lg glass-panel hover:border-rose-500/50 hover:text-rose-400 transition-all text-rose-300"
          >
            ⚠️ Phishing Simulation URL
          </button>
          <button 
            onClick={() => onStartScanning('https://github.com')}
            className="px-3 py-1 rounded-lg glass-panel hover:border-emerald-500/50 hover:text-emerald-400 transition-all text-emerald-300"
          >
            ✅ Safe Official Domain
          </button>
          <button 
            onClick={() => onStartScanning('http://192.168.1.50/verify')}
            className="px-3 py-1 rounded-lg glass-panel hover:border-amber-500/50 hover:text-amber-400 transition-all text-amber-300"
          >
            ⚠️ Raw IP Hostname
          </button>
        </div>

        {/* Trust Stats / Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-8 border-t border-slate-800/60">
          <div className="glass-panel p-4 rounded-2xl">
            <div className="text-3xl font-extrabold text-brand-400 mb-1">100%</div>
            <div className="text-xs text-slate-400">In-Browser Privacy</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl">
            <div className="text-3xl font-extrabold text-indigo-400 mb-1">&lt; 50ms</div>
            <div className="text-xs text-slate-400">Instant Heuristic Analysis</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl">
            <div className="text-3xl font-extrabold text-emerald-400 mb-1">12+</div>
            <div className="text-xs text-slate-400">Advanced Threat Heuristics</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl">
            <div className="text-3xl font-extrabold text-amber-400 mb-1">0 Logs</div>
            <div className="text-xs text-slate-400">Zero Data Stored</div>
          </div>
        </div>
      </div>
    </div>
  );
}
