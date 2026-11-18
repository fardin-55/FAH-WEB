'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/common/GlassCard';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { z } from 'zod';

export function EmailAddressChecker() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'valid' | 'invalid' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const checkEmail = () => {
    setStatus('loading');
    setErrorMsg('');

    // Simulate network delay
    setTimeout(() => {
      const emailSchema = z.string().email();
      const result = emailSchema.safeParse(email);

      if (result.success) {
        setStatus('valid');
      } else {
        setStatus('invalid');
        setErrorMsg('Invalid email format. Please double-check.');
      }
    }, 800);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-white mb-2">Email Address Format</h3>
        <p className="text-slate-400 text-sm">Validates the syntax of an email address. This is a local format check and does not guarantee mailbox existence.</p>
      </div>

      <div className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g., hello@example.com"
          className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-indigo-500 transition-colors"
        />
        
        <div className="flex gap-3">
          <Button onClick={checkEmail} disabled={status === 'loading'} className="bg-indigo-600 hover:bg-indigo-700 text-white">
            {status === 'loading' ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Checking...</> : 'Check Address'}
          </Button>
          <Button variant="outline" onClick={() => { setEmail(''); setStatus('idle'); }} className="border-slate-800">Clear</Button>
        </div>
      </div>

      {status !== 'idle' && status !== 'loading' && (
        <GlassCard className={`p-6 border ${status === 'valid' ? 'border-emerald-500/30' : 'border-rose-500/30'}`}>
            <div className="flex items-center gap-4">
                {status === 'valid' ? <CheckCircle2 className="w-10 h-10 text-emerald-400" /> : <XCircle className="w-10 h-10 text-rose-400" />}
                <div>
                    <h4 className={`font-bold text-lg ${status === 'valid' ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {status === 'valid' ? 'Valid Format' : 'Invalid Format'}
                    </h4>
                    <p className="text-slate-300 text-sm">
                        {status === 'valid' 
                            ? 'The email address follows standard RFC formatting rules. (Note: This is a client-side format check only.)' 
                            : errorMsg}
                    </p>
                </div>
            </div>
        </GlassCard>
      )}
    </div>
  );
}
