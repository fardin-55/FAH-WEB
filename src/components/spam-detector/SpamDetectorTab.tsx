import React, { useState } from 'react';
import { MessageSquareText, AlertTriangle, ArrowRight } from 'lucide-react';
import { analyzeSpam } from '../../lib/spam/spamEngine';
import { SpamScanResult } from '../../types/spam.types';
import { useAuth } from '../../context/AuthContext';
import { useScanQuota } from '../../context/ScanQuotaContext';
import { GlassCard } from '../common/GlassCard';

export function SpamDetectorTab() {
  const [text, setText] = useState('');
  const [scanResult, setScanResult] = useState<SpamScanResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { user, setIsUpgradeModalOpen } = useAuth();
  const { spamScansRemaining, consumeSpamScan } = useScanQuota();

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (spamScansRemaining <= 0 && user?.tier !== 'pro') {
      setIsUpgradeModalOpen(true);
      return;
    }

    setIsAnalyzing(true);
    setTimeout(() => {
      consumeSpamScan();
      const result = analyzeSpam(text);
      setIsAnalyzing(false);
      setScanResult(result);
    }, 400);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
          <span>Spam & Phishing Detector</span>
          <span className="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded-full font-semibold">NLP</span>
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm">
          Paste suspicious emails or text messages to analyze spam probability and trigger keywords.
        </p>
      </div>

      <form onSubmit={handleAnalyze} className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          placeholder="Paste email or message text here..."
          className="w-full p-4 rounded-2xl glass-panel dark:glass-panel-light text-slate-900 dark:text-white placeholder-slate-400 text-sm sm:text-base border border-slate-700/40 focus:outline-none focus:border-indigo-500 shadow-xl"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isAnalyzing || !text.trim()}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-brand-500 text-white font-semibold text-sm shadow-lg hover:scale-[1.02] transition-all flex items-center space-x-2 disabled:opacity-50"
          >
            {isAnalyzing ? <span>Analyzing...</span> : <><span>Analyze Text</span><ArrowRight className="w-4 h-4" /></>}
          </button>
        </div>
      </form>

      {scanResult && (
        <div className="space-y-8 animate-fadeIn">
          <GlassCard glow={scanResult.score > 50 ? 'rose' : 'emerald'} className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              <div className={`w-24 h-24 rounded-3xl border flex flex-col items-center justify-center ${scanResult.score > 50 ? 'bg-rose-500/10 text-rose-500 border-rose-500/30' : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30'}`}>
                <span className="text-3xl font-black">{scanResult.score}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Score</span>
              </div>
              <div>
                <h4 className="text-2xl font-extrabold uppercase text-slate-900 dark:text-white mb-1">
                  {scanResult.riskLevel.replace('_', ' ')}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{scanResult.summary}</p>
              </div>
            </div>
          </GlassCard>

          {scanResult.triggers.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Detected Triggers</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scanResult.triggers.map((t) => (
                  <GlassCard key={t.id} className="p-4 flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm text-slate-900 dark:text-white">"{t.textSnippet}"</div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">{t.explanation}</div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
