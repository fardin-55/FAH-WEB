import React from 'react';
import { Button } from '@/components/ui/Button';

export function FinalCTA() {
  return (
    <section className="py-24 px-4 text-center">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-900/40 to-indigo-900/40 border border-white/10 rounded-3xl p-16 shadow-2xl">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to secure your workspace?</h2>
        <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
          Join thousands of professionals using SpamShield to detect threats and filter unwanted noise.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-indigo-600">
          Get Started for Free
        </Button>
      </div>
    </section>
  );
}
