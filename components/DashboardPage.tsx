import React, { useState } from 'react';
import { WebsiteCheckerTab } from './website-checker/WebsiteCheckerTab';
import { SpamDetectorTab } from './spam-detector/SpamDetectorTab';
import { QuotaTracker } from './dashboard/QuotaTracker';
import { Globe, MessageSquareText } from 'lucide-react';

interface DashboardPageProps {
  initialUrl?: string;
}

export function DashboardPage({ initialUrl }: DashboardPageProps) {
  const [activeTab, setActiveTab] = useState<'website' | 'spam'>(initialUrl ? 'website' : 'website');

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <QuotaTracker />

      <div className="flex items-center space-x-2 p-1.5 rounded-2xl bg-slate-900 max-w-md mb-8 border border-slate-800">
        <button
          onClick={() => setActiveTab('website')}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl font-semibold text-sm transition-all ${
            activeTab === 'website' ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-lg' : 'text-slate-300 hover:text-white'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>Website Checker</span>
        </button>

        <button
          onClick={() => setActiveTab('spam')}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl font-semibold text-sm transition-all ${
            activeTab === 'spam' ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-950 font-bold shadow-lg' : 'text-slate-300 hover:text-white'
          }`}
        >
          <MessageSquareText className="w-4 h-4" />
          <span>Spam Detector</span>
        </button>
      </div>

      {activeTab === 'website' ? <WebsiteCheckerTab initialUrl={initialUrl} /> : <SpamDetectorTab />}
    </div>
  );
}
