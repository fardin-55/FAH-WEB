import React from 'react';
import { ShieldCheck, Github, Twitter, Lock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/40 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-500 to-indigo-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">TrustScan</span>
          </div>
          <p className="text-sm">
            Next-generation URL trust checking, homoglyph spoofing defense, and email spam detection for modern web users.
          </p>
          <div className="flex items-center space-x-3 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Core Tools</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#checker" className="hover:text-brand-400 transition-colors">Website Trust Checker</a></li>
            <li><a href="#spam" className="hover:text-brand-400 transition-colors">Spam & Phishing Detector</a></li>
            <li><a href="#bulk" className="hover:text-brand-400 transition-colors">Bulk URL Scanning (Pro)</a></li>
            <li><a href="#export" className="hover:text-brand-400 transition-colors">PDF & CSV Exports</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Privacy & Security</h4>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-center space-x-1.5"><Lock className="w-3.5 h-3.5 text-emerald-400" /><span>100% In-Browser Heuristics</span></li>
            <li><a href="#privacy" className="hover:text-brand-400 transition-colors">Zero Data Logging Policy</a></li>
            <li><a href="#terms" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
            <li><a href="#security" className="hover:text-brand-400 transition-colors">Security Architecture</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Pro Tier</h4>
          <p className="text-sm mb-4">
            Unlock unlimited scans, WHOIS inspection, automated history, and team bulk checking.
          </p>
          <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-xs text-brand-300">
            ✨ Free plan includes 10 daily heuristic checks. Upgrade anytime.
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>© {new Date().getFullYear()} TrustScan Inc. All rights reserved. Built with React & Tailwind CSS.</p>
        <p className="mt-2 sm:mt-0">Shielding the web against deceptive scams and phishing vectors.</p>
      </div>
    </footer>
  );
}
