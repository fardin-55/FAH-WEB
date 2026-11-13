import React from 'react';
import { cn } from '../../lib/utils';
import { ShieldAlert, ShieldCheck, ShieldAlert as AlertIcon, Zap } from 'lucide-react';

interface BadgeProps {
  variant: 'safe' | 'suspicious' | 'dangerous' | 'pro' | 'free' | 'warning' | 'info';
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
}

export function Badge({ variant, children, className, icon = true }: BadgeProps) {
  const styles = {
    safe: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-400',
    suspicious: 'bg-amber-500/10 text-amber-500 border-amber-500/20 dark:bg-amber-500/20 dark:text-amber-400',
    dangerous: 'bg-rose-500/10 text-rose-500 border-rose-500/20 dark:bg-rose-500/20 dark:text-rose-400',
    pro: 'bg-gradient-to-r from-brand-500/20 to-indigo-500/20 text-brand-400 border-brand-500/30',
    free: 'bg-slate-500/10 text-slate-500 border-slate-500/20 dark:text-slate-400',
    warning: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    info: 'bg-brand-500/10 text-brand-500 border-brand-500/20'
  };

  const getIcon = () => {
    if (!icon) return null;
    switch (variant) {
      case 'safe': return <ShieldCheck className="w-3.5 h-3.5 mr-1" />;
      case 'suspicious':
      case 'warning': return <AlertIcon className="w-3.5 h-3.5 mr-1" />;
      case 'dangerous': return <ShieldAlert className="w-3.5 h-3.5 mr-1" />;
      case 'pro': return <Zap className="w-3.5 h-3.5 mr-1 text-brand-400 fill-brand-400" />;
      default: return null;
    }
  };

  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border', styles[variant], className)}>
      {getIcon()}
      {children}
    </span>
  );
}
