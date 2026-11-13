'use client';
import React from 'react';
import { Modal } from '@/components/common/Modal';
import { useAuth } from '@/context/AuthContext';
import { Zap, Check, Sparkles } from 'lucide-react';

export function UpgradeModal() {
  const { isUpgradeModalOpen, setIsUpgradeModalOpen, upgradeToPro } = useAuth();

  const handleSimulatedCheckout = () => {
    upgradeToPro();
    alert('🎉 Simulated Stripe Checkout successful! Welcome to TrustScan Pro.');
  };

  return (
    <Modal isOpen={isUpgradeModalOpen} onClose={() => setIsUpgradeModalOpen(false)} title="Upgrade to TrustScan Pro">
      <div className="space-y-6">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/30 text-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 mx-auto mb-3 shadow-lg shadow-cyan-500/30">
            <Zap className="w-6 h-6 fill-slate-950" />
          </div>
          <h4 className="text-xl font-bold text-white mb-1">Unlock Unlimited Security</h4>
          <p className="text-xs text-slate-300">
            Get unlimited daily scans, WHOIS & SSL inspection, and bulk report exports.
          </p>
        </div>

        <ul className="space-y-3 text-sm text-slate-300">
          <li className="flex items-center space-x-3"><Check className="w-4 h-4 text-cyan-400" /><span>Unlimited daily website & spam checks</span></li>
          <li className="flex items-center space-x-3"><Check className="w-4 h-4 text-cyan-400" /><span>Deep WHOIS, SSL certs, and domain age</span></li>
          <li className="flex items-center space-x-3"><Check className="w-4 h-4 text-cyan-400" /><span>Bulk URL checking & PDF/CSV export</span></li>
        </ul>

        <div className="pt-2">
          <button
            onClick={handleSimulatedCheckout}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Simulate Secure Stripe Checkout ($15/mo)</span>
          </button>
          <p className="text-[10px] text-center text-slate-400 mt-3">
            🔒 Fully prepared for Stripe Webhook integration. No real charges in this demo.
          </p>
        </div>
      </div>
    </Modal>
  );
}

