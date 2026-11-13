import React, { useState } from 'react';
import { Modal } from '@/components/common/Modal';
import { useAuth } from '@/context/AuthContext';
import { Lock, Mail, ArrowRight } from 'lucide-react';

export function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      login(email.trim());
    }
  };

  return (
    <Modal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} title={isSignup ? 'Create TrustScan Account' : 'Sign In to TrustScan'}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 text-white placeholder-slate-400 text-sm border border-slate-800 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Password</label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 text-white placeholder-slate-400 text-sm border border-slate-800 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold text-sm shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
        >
          <span>{isSignup ? 'Create Free Account' : 'Sign In'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => setIsSignup(!isSignup)}
            className="text-xs text-cyan-400 hover:underline font-semibold"
          >
            {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign up free"}
          </button>
        </div>
      </form>
    </Modal>
  );
}

