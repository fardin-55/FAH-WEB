import React from 'react';
import { GlassCard } from '../common/GlassCard';

export function DemoPreview() {
  return (
    <section className="py-24 bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-16">Live Result Preview</h2>
        <GlassCard className="p-8 border-indigo-500/20 shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-white">Trust Report: <span className="text-amber-500">Suspicious</span></h3>
            <div className="w-24 h-24 rounded-full border-4 border-amber-500/20 flex items-center justify-center font-bold text-2xl text-amber-500">
              42/100
            </div>
          </div>
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-slate-300 font-mono">
            "You have won a <span className="bg-rose-500/20 text-rose-300">prize</span>! Click <span className="underline text-indigo-400">here</span> to claim your $1000 cash reward now."
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
