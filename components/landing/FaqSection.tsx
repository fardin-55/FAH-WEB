import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { GlassCard } from '@/components/common/GlassCard';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    question: 'How does the Website Trust Checker work?',
    answer: 'TrustScan performs deep heuristic parsing on the URL structure, examining protocol security (HTTP vs HTTPS), raw IP addresses, excessive subdomains, risky TLDs (.xyz, .top), homoglyph unicode spoofing, and known brand impersonation patterns.'
  },
  {
    question: 'Is my data secure and private?',
    answer: 'Yes! Phase 1 of TrustScan runs 100% in your browser. The URLs you check and the email texts you paste are never stored or sent to any remote servers. Your privacy is completely guaranteed.'
  },
  {
    question: 'What is the difference between Free and Pro plans?',
    answer: 'The Free plan provides 10 daily heuristic checks for both website links and spam text with basic reports. The Pro plan unlocks unlimited daily checks, deep WHOIS & SSL inspection modules, bulk URL scanning, PDF/CSV report exports, and priority analysis speed.'
  },
  {
    question: 'Can I test the Pro upgrade without paying?',
    answer: 'Yes! TrustScan features a simulated upgrade flow and a demo account switcher so you can instantly experience all Pro features and modal workflows without needing real credit card payments right now.'
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">Got Questions?</h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Frequently Asked Questions</h3>
      </div>
      <div className="space-y-4">
        {FAQ_LIST.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <GlassCard key={index}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between text-left font-semibold text-white text-base sm:text-lg focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <div className="mt-4 pt-4 border-t border-slate-800 text-slate-300 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
