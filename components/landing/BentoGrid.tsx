import React from 'react';
import { landingContent } from '@/config/content';
import { GlowCard } from '@/components/ui/GlowCard';
import { Reveal } from '@/components/ui/Reveal';
import { ShieldAlert, Cpu, Lock, Activity, Terminal } from 'lucide-react';

export function BentoGrid() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Enterprise-Grade Security, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Developer Simple</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to secure web assets and intercept malicious payloads before they impact users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Reveal className="md:col-span-2 lg:col-span-2">
            <GlowCard className="p-8 h-full flex flex-col justify-between border-cyan-500/20 bg-surface/50 backdrop-blur-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Multi-Engine Threat Detection</h3>
                <p className="text-muted-foreground mb-6">
                  Real-time cross-referencing against Google Safe Browsing, VirusTotal, and proprietary AI neural filters.
                </p>
              </div>
              <div className="bg-background/80 rounded-xl p-4 border border-border flex items-center justify-between text-sm font-mono">
                <span className="text-emerald-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  API Status: Optimal
                </span>
                <span className="text-muted-foreground">12ms latency</span>
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
