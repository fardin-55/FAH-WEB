import React from 'react';
import { SITE_CONFIG } from '@/config/site';
import { useCounter } from '@/hooks/useCounter';

const StatItem = ({ stat }: { stat: typeof SITE_CONFIG.stats[0] }) => {
  const count = useCounter(stat.value);
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-white mb-1">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
    </div>
  );
};

export function TrustStrip() {
  return (
    <div className="border-y border-white/5 bg-slate-900/30 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {SITE_CONFIG.stats.map((stat, i) => (
          <StatItem key={i} stat={stat} />
        ))}
      </div>
    </div>
  );
}
