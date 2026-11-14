'use client';
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Zap, User, LogOut, Sparkles, Menu, X } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface NavbarProps {
  currentTab: 'landing' | 'dashboard' | 'pricing';
  onNavigate: (tab: 'landing' | 'dashboard' | 'pricing') => void;
}

export function Navbar({ currentTab, onNavigate }: NavbarProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { user, logout, setIsAuthModalOpen, setIsUpgradeModalOpen } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: 'landing' | 'dashboard' | 'pricing') => {
    onNavigate(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#070b14]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div onClick={() => handleNavClick('landing')} className="flex items-center space-x-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-6 h-6 text-slate-950 font-black" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white">
              ShieldScan
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
              Security & Spam Shield
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-1 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
          <button onClick={() => handleNavClick('landing')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${currentTab === 'landing' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-300 hover:text-white'}`}>Overview</button>
          <button onClick={() => handleNavClick('dashboard')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${currentTab === 'dashboard' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-300 hover:text-white'}`}>Scanner Tools</button>
          <button onClick={() => handleNavClick('pricing')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center space-x-1 ${currentTab === 'pricing' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-300 hover:text-white'}`}><span>Pricing</span><Sparkles className="w-3.5 h-3.5 text-amber-400 ml-1" /></button>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          {user?.tier === 'pro' ? (
            <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">PRO ACTIVE</span>
          ) : (
            <button onClick={() => setIsUpgradeModalOpen(true)} className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center space-x-1.5">
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Upgrade Pro</span>
            </button>
          )}
          {user ? (
            <div className="flex items-center space-x-3 pl-3 border-l border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center text-slate-950 font-bold text-sm">{user.name.substring(0, 2).toUpperCase()}</div>
              <button onClick={logout} title="Log out" className="p-2 text-slate-400 hover:text-rose-400 rounded-lg bg-slate-900 border border-slate-800"><LogOut className="w-4 h-4" /></button>
            </div>
          ) : (
            <button onClick={() => setIsAuthModalOpen(true)} className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-900 text-slate-200 text-sm font-semibold border border-slate-800 hover:border-cyan-500/50">
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </button>
          )}
        </div>

        <div className="flex items-center space-x-3 md:hidden">
          <ThemeToggle />
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-xl bg-slate-900 text-slate-200 border border-slate-800">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 space-y-4">
          <div className="flex flex-col space-y-2">
            <button onClick={() => handleNavClick('landing')} className="px-4 py-3 rounded-xl text-left text-sm font-medium text-slate-300">Overview</button>
            <button onClick={() => handleNavClick('dashboard')} className="px-4 py-3 rounded-xl text-left text-sm font-medium text-slate-300">Scanner Tools</button>
            <button onClick={() => handleNavClick('pricing')} className="px-4 py-3 rounded-xl text-left text-sm font-medium text-slate-300">Pricing</button>
          </div>
        </div>
      )}
    </header>
  );
}
