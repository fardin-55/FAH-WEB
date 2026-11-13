'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export function ScoreGauge({ score }: { score: number }) {
  const controls = useAnimation();
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getVerdictColor = (s: number) => {
    if (s >= 80) return 'text-verdict-safe stroke-verdict-safe';
    if (s >= 50) return 'text-verdict-warning stroke-verdict-warning';
    return 'text-verdict-threat stroke-verdict-threat';
  };

  useEffect(() => {
    controls.start({
      strokeDashoffset,
      transition: { duration: 1.5, ease: 'easeOut' },
    });
  }, [score, controls, strokeDashoffset]);

  return (
    <div className="relative flex h-40 w-40 items-center justify-center">
      <svg className="h-full w-full rotate-[-90deg]">
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="12"
          className="text-muted/20"
        />
        <motion.circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={controls}
          className={getVerdictColor(score)}
        />
      </svg>
      <div className={cn('absolute flex flex-col items-center', getVerdictColor(score).split(' ')[0])}>
        <span className="text-4xl font-bold">{score}</span>
        <span className="text-xs font-medium uppercase tracking-wider opacity-80">Score</span>
      </div>
    </div>
  );
}

function cn(...args: (string | undefined)[]) {
  return args.filter(Boolean).join(' ');
}
