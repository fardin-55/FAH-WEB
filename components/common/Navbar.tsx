import React from 'react';
import { ShieldCheck, Zap, User, LogOut, Sparkles } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

interface NavbarProps {
  currentTab: 'landing' | 'dashboard' | 'pricing';
  onNavigate: (tab: 'landing' | 'dashboard' | 'pricing') => void;
}

export function Navbar({ currentTab, onNavigate }: NavbarProps) {
  const { user, logout, setIsAuthModalOpen, setIsUpgradeModalOpen } = useAuth();

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div onClick={() => onNavigate('landing')} className="flex items-center space-x-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              TrustScan
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
              Security Shield 2026
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-1 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800">
          <button
            onClick={() => onNavigate('landing')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentTab === 'landing' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-300 hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => onNavigate('dashboard')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentTab === 'dashboard' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-300 hover:text-white'
            }`}
          >
            Dashboard & Tools
          </button>
          <button
            onClick={() => onNavigate('pricing')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-1 ${
              currentTab === 'pricing' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-300 hover:text-white'
            }`}
          >
            <span>Pricing</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400 ml-1 animate-pulse" />
          </button>
        </nav>

        <div className="flex items-center space-x-3">
          {user?.tier === 'pro' ? (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30">
              PRO ACTIVE
            </span>
          ) : (
            <button
              onClick={() => setIsUpgradeModalOpen(true)}
              className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Upgrade Pro</span>
            </button>
          )}

          {user ? (
            <div className="flex items-center space-x-2 pl-2 border-l border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center text-slate-950 font-bold text-sm">
                {user.name.substring(0, 2).toUpperCase()}
              </div>
              <button onClick={logout} title="Log out" className="p-2 text-slate-400 hover:text-rose-500 transition-colors rounded-lg">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-900 text-slate-200 text-sm font-semibold hover:border-cyan-500/50 border border-slate-800 transition-all"
            >
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
