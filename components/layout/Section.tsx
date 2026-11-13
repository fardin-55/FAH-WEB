import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export function Section({
  as: Component = 'section',
  padding = 'md',
  className,
  children,
  ...props
}: SectionProps) {
  const paddingStyles = {
    none: '',
    sm: 'py-8 md:py-12',
    md: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
    xl: 'py-32 md:py-48',
  };

  return (
    <Component
      className={cn(paddingStyles[padding], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
