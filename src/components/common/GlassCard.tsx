import React from 'react';
import { cn } from '../../lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: 'cyan' | 'indigo' | 'rose' | 'emerald' | 'none';
}

export function GlassCard({ children, className, glow = 'none', ...props }: GlassCardProps) {
  const glowStyles = {
    cyan: 'hover:shadow-glow-cyan border-brand-500/30',
    indigo: 'hover:shadow-glow-indigo border-indigo-500/30',
    rose: 'hover:shadow-glow-rose border-rose-500/30',
    emerald: 'hover:shadow-glow-emerald border-emerald-500/30',
    none: ''
  };

  return (
    <div
      className={cn(
        'glass-panel dark:glass-panel-light rounded-2xl p-6 transition-all duration-300',
        glowStyles[glow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
