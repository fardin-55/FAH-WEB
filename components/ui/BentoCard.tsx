import React from 'react';
import { cn } from '@/lib/utils';
import { GlowCard } from './GlowCard';
import { Reveal } from './Reveal';

interface BentoCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  content?: React.ReactNode;
  colSpan?: string;
  rowSpan?: string;
  index?: number;
}

export function BentoCard({
  title,
  description,
  icon,
  content,
  className,
  colSpan = 'col-span-1',
  rowSpan = 'row-span-1',
  index = 0,
  ...props
}: BentoCardProps) {
  return (
    <Reveal delay={index * 0.1} className={cn(colSpan, rowSpan)}>
      <GlowCard className={cn('h-full p-6 flex flex-col', className)} {...props}>
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-1">
            <h3 className="h3-heading text-lg sm:text-xl">{title}</h3>
            {description && <p className="body-small line-clamp-2">{description}</p>}
          </div>
          {icon && (
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
          )}
        </div>
        <div className="flex-1 mt-2">
          {content}
        </div>
      </GlowCard>
    </Reveal>
  );
}
