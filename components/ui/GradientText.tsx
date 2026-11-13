import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'brand' | 'subtle' | 'cyan' | 'indigo' | 'rose' | 'emerald';
}

export function GradientText({
  children,
  variant = 'brand',
  className,
  ...props
}: GradientTextProps) {
  const variants = {
    brand: 'from-cyan-400 via-brand-500 to-indigo-500',
    subtle: 'from-foreground to-muted-foreground/60',
    cyan: 'from-cyan-300 to-cyan-600',
    indigo: 'from-indigo-400 to-indigo-700',
    rose: 'from-rose-400 to-rose-600',
    emerald: 'from-emerald-400 to-emerald-600',
  };

  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
