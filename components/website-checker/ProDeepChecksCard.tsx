import React from 'react';
import { ProScanDetails } from '@/types/scanner.types';
import { Lock, Zap, Shield, Server, Calendar, Award } from 'lucide-react';
import { GlassCard } from '@/components/common/GlassCard';
import { useAuth } from '@/context/AuthContext';

interface ProDeepChecksCardProps {
  proDetails?: ProScanDetails;
}

export function ProDeepChecksCard({ proDetails }: ProDeepChecksCardProps) {
  const { user, setIsUpgradeModalOpen } = useAuth();
  const isPro = user?.tier === 'pro';

  if (!isPro || !proDetails) {
    return (
      <GlassCard glow="indigo" className="relative overflow-hidden p-8 text-center">
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-10">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 mb-4 shadow-lg shadow-cyan-500/30">
            <Zap className="w-6 h-6 fill-slate-950" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Unlock Pro Deep Security Checks</h4>
          <p className="text-slate-300 text-sm max-w-md mb-6">
            Upgrade to Pro to inspect SSL certificate issuers, domain age, registrar records, server IP routing, and global vendor threat blacklists.
          </p>
          <button
            onClick={() => setIsUpgradeModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold text-sm shadow-xl hover:scale-105 transition-all flex items-center space-x-2"
          >
            <Zap className="w-4 h-4 fill-slate-950" />
            <span>Upgrade to Pro Now</span>
          </button>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard glow="cyan" className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">Pro Deep Security Modules</h4>
            <p className="text-xs text-slate-400">Verified via live domain intelligence and WHOIS registries</p>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold">Pro Active</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>Domain Age</span>
          </div>
          <div className="text-base font-bold text-white">{proDetails.domainAge}</div>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
            <Server className="w-4 h-4 text-indigo-400" />
            <span>Server IP Address</span>
          </div>
          <div className="text-base font-bold text-white font-mono">{proDetails.ipAddress}</div>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>SSL Certificate</span>
          </div>
          <div className="text-base font-bold text-white">{proDetails.sslIssuer}</div>
        </div>
      </div>
    </GlassCard>
  );
}
