import React, { useState } from 'react';
import { UrlInputForm } from './UrlInputForm';
import { TrustScoreGauge } from './TrustScoreGauge';
import { AnalysisBreakdown } from './AnalysisBreakdown';
import { ProDeepChecksCard } from './ProDeepChecksCard';
import { UrlScanResult } from '@/types/scanner.types';
import { analyzeUrl } from '@/lib/scanner/urlParser';
import { useAuth } from '@/context/AuthContext';
import { Download, History, Sparkles } from 'lucide-react';

interface WebsiteCheckerTabProps {
  initialUrl?: string;
}

export function WebsiteCheckerTab({ initialUrl }: WebsiteCheckerTabProps) {
  const { user, setIsUpgradeModalOpen } = useAuth();
  const [scanResult, setScanResult] = useState<UrlScanResult | null>(null);

  React.useEffect(() => {
    if (initialUrl) {
      analyzeUrl(initialUrl, user?.tier === 'pro').then(setScanResult);
    }
  }, [initialUrl, user?.tier]);

  const handleExport = (format: 'csv' | 'pdf') => {
    if (user?.tier !== 'pro') {
      setIsUpgradeModalOpen(true);
      return;
    }
    alert(`Exporting scan report as ${format.toUpperCase()}... (Pro feature simulation)`);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-extrabold text-white flex items-center space-x-2">
            <span>Website Trust Checker</span>
            <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-semibold">Heuristic Shield</span>
          </h3>
          <p className="text-slate-300 text-sm">Evaluate link safety, detect lookalike homoglyphs, and inspect protocol integrity.</p>
        </div>

        {scanResult && (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleExport('csv')}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold hover:border-cyan-500/50 transition-all flex items-center space-x-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={() => handleExport('pdf')}
              className="px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-semibold hover:bg-cyan-500/20 transition-all flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Export PDF</span>
            </button>
          </div>
        )}
      </div>

      <UrlInputForm onScanComplete={(res) => setScanResult(res)} initialUrl={initialUrl} />

      {scanResult ? (
        <div className="space-y-8 animate-fadeIn">
          <TrustScoreGauge score={scanResult.score} riskLevel={scanResult.riskLevel} summary={scanResult.summary} />
          <AnalysisBreakdown checks={scanResult.checks} />
          <ProDeepChecksCard proDetails={scanResult.proDetails} />
        </div>
      ) : (
        <div className="bg-slate-900 p-12 text-center rounded-3xl border border-dashed border-slate-800">
          <div className="w-16 h-16 rounded-3xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-4">
            <History className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">No URL Scanned Yet</h4>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Paste any website link above to generate an instant trust report.
          </p>
        </div>
      )}
    </div>
  );
}
