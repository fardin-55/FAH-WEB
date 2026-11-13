import React from 'react';
import { CheckItem } from '@/types/scanner.types';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';
import { GlassCard } from '@/components/common/GlassCard';

interface AnalysisBreakdownProps {
  checks: CheckItem[];
}

export function AnalysisBreakdown({ checks }: AnalysisBreakdownProps) {
  const getStatusIcon = (status: CheckItem['status']) => {
    switch (status) {
      case 'passed': return <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0" />;
      case 'failed': return <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />;
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-bold text-white">Heuristic Inspection Breakdown</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {checks.map((check) => (
          <GlassCard key={check.id} className="flex items-start space-x-4 p-4">
            {getStatusIcon(check.status)}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h5 className="font-semibold text-white text-sm">{check.title}</h5>
                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                  check.impact === 'high' ? 'bg-rose-500/10 text-rose-400' :
                  check.impact === 'medium' ? 'bg-amber-500/10 text-amber-400' :
                  'bg-emerald-500/10 text-emerald-400'
                }`}>{check.impact} impact</span>
              </div>
              <p className="text-xs text-slate-300">{check.description}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
