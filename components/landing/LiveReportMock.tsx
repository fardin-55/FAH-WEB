import React from 'react';
import { GlowCard } from '@/components/ui/GlowCard';
import { ScoreGauge } from '@/components/scanner/ScoreGauge';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export function LiveReportMock() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Live Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">At Your Fingertips</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Preview of our comprehensive automated audit report generated in under 3 seconds.
          </p>
        </div>
        <GlowCard className="p-8 sm:p-12 border-cyan-500/30 bg-surface/80 backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col items-center justify-center text-center p-6 bg-background/50 rounded-2xl border border-border">
              <ScoreGauge score={98} />
              <div className="mt-6">
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified Safe & Secure
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-4">Scanned target: https://stripe.com</p>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Valid SSL Certificate</h4>
                    <p className="text-xs text-muted-foreground">Issued by DigiCert • Expires in 248 days</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400">PASS</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Blacklist Databases</h4>
                    <p className="text-xs text-muted-foreground">Clean across Google Safe Browsing & VirusTotal</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400">0 / 64</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Security Headers Warning</h4>
                    <p className="text-xs text-muted-foreground">Missing Content-Security-Policy header</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-amber-400">WARN</span>
              </div>
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}

