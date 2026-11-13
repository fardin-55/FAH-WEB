import React, { useState } from 'react';
import { Globe, Search, ArrowRight, ShieldCheck, AlertTriangle, ShieldAlert, Sparkles, Lock, Zap } from 'lucide-react';
import { analyzeUrl } from '../../lib/scanner/urlParser';
import { UrlScanResult } from '../../types/scanner.types';
import { useAuth } from '../../context/AuthContext';
import { useScanQuota } from '../../context/ScanQuotaContext';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';

interface UrlInputFormProps {
  onScanComplete: (result: UrlScanResult) => void;
  initialUrl?: string;
}

export function UrlInputForm({ onScanComplete, initialUrl = '' }: UrlInputFormProps) {
  const [url, setUrl] = useState(initialUrl);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { user, setIsUpgradeModalOpen } = useAuth();
  const { websiteScansRemaining, consumeWebsiteScan } = useScanQuota();

  const handleScan = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!url.trim()) return;

    if (websiteScansRemaining <= 0 && user?.tier !== 'pro') {
      setIsUpgradeModalOpen(true);
      return;
    }

    setIsAnalyzing(true);
    setTimeout(() => {
      consumeWebsiteScan();
      const result = analyzeUrl(url.trim(), user?.tier === 'pro');
      setIsAnalyzing(false);
      onScanComplete(result);
    }, 400);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleScan} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Globe className="w-5 h-5 text-slate-400" />
          </div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL (e.g. https://example.com or secure-login.xyz)..."
            className="w-full pl-12 pr-32 py-4 rounded-2xl glass-panel dark:glass-panel-light text-slate-900 dark:text-white placeholder-slate-400 text-sm sm:text-base border border-slate-700/40 focus:outline-none focus:border-brand-500 shadow-xl transition-all"
          />
          <div className="absolute right-2 top-2 bottom-2">
            <button
              type="submit"
              disabled={isAnalyzing}
              className="h-full px-6 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-600 text-white font-semibold text-sm shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2 disabled:opacity-50"
            >
              {isAnalyzing ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Scan URL</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Preset quick test pills */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="text-slate-400 font-medium">Quick presets:</span>
        <button
          onClick={() => { setUrl('https://github.com'); }}
          className="px-3 py-1.5 rounded-lg glass-panel hover:bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 transition-all"
        >
          ✅ github.com (Safe)
        </button>
        <button
          onClick={() => { setUrl('https://paypal-security-alert.xyz/signin'); }}
          className="px-3 py-1.5 rounded-lg glass-panel hover:bg-rose-500/10 text-rose-400 border border-rose-500/20 transition-all"
        >
          ⚠️ Phishing Spoof
        </button>
        <button
          onClick={() => { setUrl('http://192.168.1.100/bank'); }}
          className="px-3 py-1.5 rounded-lg glass-panel hover:bg-amber-500/10 text-amber-400 border border-amber-500/20 transition-all"
        >
          ⚠️ Raw IP Address
        </button>
      </div>
    </div>
  );
}
