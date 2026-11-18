'use client';

import SecurityShield from '@/components/three/SecurityShield';
import React, { useState } from 'react';
import { ArrowRight, Globe, Sparkles, ShieldAlert } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

interface HeroSectionProps {
  onStartScanning: (initialUrl?: string) => void;
  onNavigatePricing: () => void;
}

export function HeroSection({ onStartScanning }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<'website' | 'spam'>('website');
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      onStartScanning(inputVal.trim());
    } else {
      onStartScanning();
    }
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-28 lg:pt-24 lg:pb-36 bg-gradient-to-b from-slate-950 via-[#070b14] to-slate-950">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal>
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6 shadow-xl">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
            <span>ShieldScan AI Phishing & Spam Intelligence</span>
          </div>
        </Reveal>
        
        <SecurityShield height={400} />

        <Reveal delay={0.1}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6">
            Instantly Detect Spam, Phishing & Malicious <span className="text-gradient">Websites</span>.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Enterprise-grade website trust scoring, SSL inspector, redirect chain auditing, and NLP spam detection in milliseconds.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="max-w-2xl mx-auto mb-6">
          <div className="bg-slate-900/90 backdrop-blur-2xl p-3 sm:p-4 rounded-3xl border border-white/10 shadow-2xl space-y-4">
            <div className="flex items-center justify-center space-x-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab('website')}
                className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2 ${
                  activeTab === 'website' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>Website Inspector</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('spam')}
                className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2 ${
                  activeTab === 'spam' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <ShieldAlert className="w-4 h-4" />
                <span>Spam Text</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2">
              <div className="flex items-center pl-3 w-full sm:w-auto flex-1 bg-slate-950 rounded-2xl border border-slate-800 focus-within:border-cyan-500">
                {activeTab === 'website' ? (
                  <Globe className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                ) : (
                  <ShieldAlert className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                )}
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder={activeTab === 'website' ? 'Enter URL...' : 'Paste message...'}
                  className="w-full bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none py-3 pr-3"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold text-sm shadow-lg hover:scale-102 transition-all flex items-center justify-center space-x-2 flex-shrink-0"
              >
                <span>Scan Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </Reveal>

        <Reveal delay={0.35} className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 mb-12">
          <span className="font-medium text-slate-300">Quick tests:</span>
          <button onClick={() => onStartScanning('https://secure-login-paypal.xyz')} className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-rose-400 font-semibold">⚠️ Phishing Sim</button>
          <button onClick={() => onStartScanning('https://github.com')} className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 font-semibold">✅ Safe Domain</button>
        </Reveal>
      </div>
    </section>
  );
}
