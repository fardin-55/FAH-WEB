import React from 'react';
import { ShieldCheck, AlertTriangle, ShieldAlert } from 'lucide-react';
import { RiskLevel } from '../../types/scanner.types';
import { GlassCard } from '../common/GlassCard';

interface TrustScoreGaugeProps {
  score: number;
  riskLevel: RiskLevel;
  summary: string;
}

export function TrustScoreGauge({ score, riskLevel, summary }: TrustScoreGaugeProps) {
  const getColors = () => {
    switch (riskLevel) {
      case 'safe':
        return {
          text: 'text-emerald-500 dark:text-emerald-400',
          bg: 'bg-emerald-500/10 border-emerald-500/30',
          glow: 'emerald',
          icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />
        };
      case 'suspicious':
        return {
          text: 'text-amber-500 dark:text-amber-400',
          bg: 'bg-amber-500/10 border-amber-500/30',
          glow: 'rose',
          icon: <AlertTriangle className="w-8 h-8 text-amber-500" />
        };
      case 'dangerous':
        return {
          text: 'text-rose-500 dark:text-rose-400',
          bg: 'bg-rose-500/10 border-rose-500/30',
          glow: 'rose',
          icon: <ShieldAlert className="w-8 h-8 text-rose-500" />
        };
    }
  };

  const style = getColors();

  return (
    <GlassCard glow={style.glow as any} className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center space-x-6">
        <div className={`w-24 h-24 rounded-3xl ${style.bg} border flex flex-col items-center justify-center shadow-xl`}>
          <span className={`text-3xl font-black ${style.text}`}>{score}</span>
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Risk Score</span>
        </div>
        <div>
          <div className="flex items-center space-x-2 mb-2">
            {style.icon}
            <h3 className={`text-2xl font-extrabold uppercase tracking-wide ${style.text}`}>
              {riskLevel} Risk Verdict
            </h3>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-xl">
            {summary}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
