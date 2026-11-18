import React from 'react';
import { landingContent } from '@/config/content';
import { Reveal } from '@/components/ui/Reveal';
import { Search, Cpu, FileCheck } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden bg-surface/20 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            How ShieldScan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Protects You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to secure your browsing, verify any website, and intercept malicious spam.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {landingContent.howItWorks.map((step, idx) => {
            const icons = [
              <Search key="search" className="w-6 h-6" />,
              <Cpu key="cpu" className="w-6 h-6" />,
              <FileCheck key="file" className="w-6 h-6" />
            ];
            return (
              <Reveal key={idx} className="relative">
                <div className="p-8 rounded-2xl bg-surface/50 border border-border backdrop-blur-xl h-full flex flex-col relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 shadow-inner">
                    {icons[idx]}
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-2">Step 0{idx + 1}</span>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
