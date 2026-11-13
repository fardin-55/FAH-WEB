import React, { useState } from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useScanQuota } from '@/context/ScanQuotaContext';
import { analyzeUrl } from '@/lib/scanner/urlParser';
import { UrlScanResult } from '@/types/scanner.types';

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
            placeholder="Enter website URL (e.g. https://example.com)..."
            className="w-full pl-12 pr-32 py-4 rounded-2xl bg-slate-900 text-white placeholder-slate-400 text-sm sm:text-base border border-slate-800 focus:outline-none focus:border-cyan-500 shadow-xl"
          />
          <div className="absolute right-2 top-2 bottom-2">
            <button
              type="submit"
              disabled={isAnalyzing}
              className="h-full px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold text-sm shadow-lg hover:scale-[1.02] transition-all flex items-center space-x-2 disabled:opacity-50"
            >
              {isAnalyzing ? <span>Scanning...</span> : <><span>Scan URL</span><ArrowRight className="w-4 h-4" /></>}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
