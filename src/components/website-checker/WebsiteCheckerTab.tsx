import React, { useState } from 'react';
import { UrlInputForm } from './UrlInputForm';
import { TrustScoreGauge } from './TrustScoreGauge';
import { AnalysisBreakdown } from './AnalysisBreakdown';
import { ProDeepChecksCard } from './ProDeepChecksCard';
import { UrlScanResult } from '../../types/scanner.types';
import { analyzeUrl } from '../../lib/scanner/urlParser';
import { useAuth } from '../../context/AuthContext';
import { Download, History, Sparkles } from 'lucide-react';

interface WebsiteCheckerTabProps {
  initialUrl?: string;
}

export function WebsiteCheckerTab({ initialUrl }: WebsiteCheckerTabProps) {
  const { user, setIsUpgradeModalOpen } = useAuth();
  const [scanResult, setScanResult] = useState<UrlScanResult | null>(() => {
    if (initialUrl) {
      return analyzeUrl(initialUrl, user?.tier === 'pro');
    }
    return null;
  });

  const handleScanComplete = (result: UrlScanResult) => {
    setScanResult(result);
  };

  const handleExport = (format: 'csv' | 'pdf') => {
    if (user?.tier !== 'pro') {
      setIsUpgradeModalOpen(true);
      return;
    }
    alert(`Exporting scan report as ${format.toUpperCase()}... (Pro feature simulation)`);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
            <span>Website Trust Checker</span>
            <span className="text-xs bg-brand-500/20 text-brand-400 px-2 py-0.5 rounded-full font-semibold">Heuristic Shield</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Evaluate link safety, detect lookalike homoglyphs, and inspect protocol integrity.
          </p>
        </div>

        {scanResult && (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleExport('csv')}
              className="px-4 py-2 rounded-xl glass-panel text-slate-700 dark:text-slate-200 text-xs font-semibold hover:border-brand-500/50 transition-all flex items-center space-x-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={() => handleExport('pdf')}
              className="px-4 py-2 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-semibold hover:bg-brand-500/20 transition-all flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Export PDF Report</span>
            </button>
          </div>
        )}
      </div>

      {/* Input Form */}
      <UrlInputForm onScanComplete={handleScanComplete} initialUrl={initialUrl} />

      {/* Results Section */}
      {scanResult ? (
        <div className="space-y-8 animate-fadeIn">
          <TrustScoreGauge
            score={scanResult.score}
            riskLevel={scanResult.riskLevel}
            summary={scanResult.summary}
          />
          <AnalysisBreakdown checks={scanResult.checks} />
          <ProDeepChecksCard proDetails={scanResult.proDetails} />
        </div>
      ) : (
        <div className="glass-panel p-12 text-center rounded-3xl border border-dashed border-slate-700">
          <div className="w-16 h-16 rounded-3xl bg-brand-500/10 text-brand-400 flex items-center justify-center mx-auto mb-4">
            <History className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No URL Scanned Yet</h4>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
            Paste any website link above or click one of the quick presets to generate an instant trust report.
          </p>
        </div>
      )}
    </div>
  );
}
