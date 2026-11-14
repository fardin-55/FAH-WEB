import React from 'react';
import { Globe, MessageSquareText, Lock, Zap, Sparkles } from 'lucide-react';
import { GlassCard } from '@/components/common/GlassCard';

export function BentoGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">2026 Security Architecture</h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Comprehensive Protection in a Bento Grid
        </h3>
        <p className="text-slate-300">
          Built with cutting-edge client-side heuristic rules to catch sophisticated scams before you click.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <GlassCard glow="cyan" className="md:col-span-2 lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20">
              <Globe className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Website Trust Checker</h4>
            <p className="text-slate-300 text-sm mb-6">
              Enter any URL to evaluate protocol security, raw IP hostnames, excessive subdomains, risky TLDs (.xyz, .top), and homoglyph spoofing in real time.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-white/5 font-mono text-xs text-cyan-300 flex items-center justify-between">
            <span>Status: Active Heuristics</span>
            <span className="text-emerald-400 font-bold">● Protected</span>
          </div>
        </GlassCard>

        <GlassCard glow="indigo" className="md:col-span-1 lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
              <MessageSquareText className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Spam & Phishing Detector</h4>
            <p className="text-slate-300 text-sm mb-6">
              Paste suspicious emails, SMS texts, or DMs. Our weighted keyword analyzer detects urgency triggers, financial bait, excessive CAPS, and hidden trap links.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-xs text-indigo-400 font-semibold">
            <span>Instant 0-100 Confidence Scoring</span>
          </div>
        </GlassCard>

        <GlassCard glow="emerald" className="md:col-span-1 lg:col-span-1 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
              <Lock className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Zero Data Logging</h4>
            <p className="text-slate-300 text-xs">
              We don't sell your data. Scanned URLs and pasted text are processed only to generate your result, and are never shared with advertisers.
            </p>
          </div>
        </GlassCard>

        <GlassCard glow="rose" className="md:col-span-1 lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400 mb-6 border border-rose-500/20">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Pro Deep Security & Bulk Export</h4>
            <p className="text-slate-300 text-sm mb-6">
              Upgrade to Pro for domain age verification, SSL certificate inspection, WHOIS record lookups, batch CSV/PDF reports, and unlimited daily scans.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-xs text-rose-400 font-semibold">
            <span>⚡ Available on Pro Plan</span>
          </div>
        </GlassCard>

        <GlassCard glow="cyan" className="md:col-span-1 lg:col-span-1 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Lightning Fast</h4>
            <p className="text-slate-300 text-xs">
              Optimized Next.js frontend with zero bloat. Instant visual feedback with smooth micro-interactions.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
