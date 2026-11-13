import React from 'react';
import { ProScanDetails } from '../../types/scanner.types';
import { Lock, Zap, Shield, Server, Calendar, Award } from 'lucide-react';
import { GlassCard } from '../common/GlassCard';
import { useAuth } from '../../context/AuthContext';

interface ProDeepChecksCardProps {
  proDetails?: ProScanDetails;
}

export function ProDeepChecksCard({ proDetails }: ProDeepChecksCardProps) {
  const { user, setIsUpgradeModalOpen } = useAuth();
  const isPro = user?.tier === 'pro';

  if (!isPro || !proDetails) {
    return (
      <GlassCard glow="indigo" className="relative overflow-hidden p-8 text-center">
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-10">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-500 to-indigo-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-brand-500/30">
            <Zap className="w-6 h-6 fill-white" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Unlock Pro Deep Security Checks</h4>
          <p className="text-slate-300 text-sm max-w-md mb-6">
            Upgrade to Pro to inspect SSL certificate issuers, domain age, registrar records, server IP routing, and global vendor threat blacklists.
          </p>
          <button
            onClick={() => setIsUpgradeModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-600 text-white font-bold text-sm shadow-xl hover:scale-105 transition-all flex items-center space-x-2"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>Upgrade to Pro Now</span>
          </button>
        </div>

        {/* Blurred background preview */}
        <div className="filter blur-sm opacity-40 grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
          <div className="p-4 rounded-xl bg-slate-900"><div className="text-xs text-slate-400">Domain Age</div><div className="text-sm font-bold text-white">4 Years, 2 Months</div></div>
          <div className="p-4 rounded-xl bg-slate-900"><div className="text-xs text-slate-400">SSL Issuer</div><div className="text-sm font-bold text-white">Let's Encrypt Authority X3</div></div>
          <div className="p-4 rounded-xl bg-slate-900"><div className="text-xs text-slate-400">Server IP</div><div className="text-sm font-bold text-white">104.21.32.11</div></div>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard glow="cyan" className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-700/40">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Pro Deep Security Modules</h4>
            <p className="text-xs text-slate-400">Verified via live domain intelligence and WHOIS registries</p>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold">Pro Active</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl glass-panel">
          <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
            <Calendar className="w-4 h-4 text-brand-400" />
            <span>Domain Age</span>
          </div>
          <div className="text-base font-bold text-slate-900 dark:text-white">{proDetails.domainAge}</div>
        </div>

        <div className="p-4 rounded-xl glass-panel">
          <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
            <Server className="w-4 h-4 text-indigo-400" />
            <span>Server IP Address</span>
          </div>
          <div className="text-base font-bold text-slate-900 dark:text-white font-mono">{proDetails.ipAddress}</div>
        </div>

        <div className="p-4 rounded-xl glass-panel">
          <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>SSL Certificate</span>
          </div>
          <div className="text-base font-bold text-slate-900 dark:text-white">{proDetails.sslIssuer}</div>
        </div>

        <div className="p-4 rounded-xl glass-panel">
          <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Domain Registrar</span>
          </div>
          <div className="text-base font-bold text-slate-900 dark:text-white">{proDetails.registrar}</div>
        </div>

        <div className="p-4 rounded-xl glass-panel sm:col-span-2">
          <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Reputation Vendor Status</span>
          </div>
          <div className="text-base font-bold text-emerald-400">{proDetails.reputationDatabaseStatus}</div>
        </div>
      </div>
    </GlassCard>
  );
}
