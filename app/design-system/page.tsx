'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { ScoreGauge } from '@/components/scanner/ScoreGauge';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { GradientText } from '@/components/ui/GradientText';
import { GlowCard } from '@/components/ui/GlowCard';
import { BentoCard } from '@/components/ui/BentoCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Shield, Zap, Search, Globe } from 'lucide-react';

export default function DesignSystemPage() {
  return (
    <Container className="py-12 space-y-16">
      <Section padding="none">
        <h1 className="display-heading mb-4 block">
          <GradientText>Design System</GradientText>
        </h1>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <p className="text-muted-foreground">Toggle theme to review tokens.</p>
        </div>
      </Section>

      <Section padding="none" className="space-y-6">
        <h2 className="h2-heading">Badges & Verdicts</h2>
        <div className="flex flex-wrap gap-4">
          <Badge variant="safe">Secure</Badge>
          <Badge variant="warning">Suspicious</Badge>
          <Badge variant="threat">Malicious</Badge>
          <Badge variant="outline">Neutral</Badge>
        </div>
      </Section>

      <Section padding="none" className="space-y-6">
        <h2 className="h2-heading">Typography</h2>
        <div className="space-y-4 max-w-3xl">
          <h1 className="display-heading">Secure the Web.</h1>
          <h1 className="h1-heading">Your digital shield.</h1>
          <p className="body-default">Enterprise-grade website analysis and spam detection tools.</p>
          <code className="font-code text-sm bg-muted px-2 py-1 rounded">npm install @shieldscan/api</code>
        </div>
      </Section>

      <Section padding="none" className="space-y-6">
        <h2 className="h2-heading">Interactive</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="lg">Start Free Scan</Button>
          <Button variant="glow">Upgrade to Pro</Button>
          <Button variant="secondary">History</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </Section>

      <Section padding="none" className="space-y-8">
        <h2 className="h2-heading">Data Viz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-4 p-8 glass-card rounded-3xl">
            <ScoreGauge score={98} />
            <p className="font-bold">Safety Score</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-8 glass-card rounded-3xl">
            <div className="text-5xl font-bold text-primary"><AnimatedCounter value={12840} /></div>
            <p className="text-muted-foreground">Scans Completed</p>
          </div>
          <div className="flex flex-col items-center gap-4 p-8 glass-card rounded-3xl text-verdict-threat">
            <ScoreGauge score={15} />
            <p className="font-bold">Risk Level</p>
          </div>
        </div>
      </Section>

      <Section padding="none" className="space-y-8">
        <h2 className="h2-heading">Bento & Glow</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <BentoCard
            index={0} title="Website Checker" icon={<Globe className="w-5 h-5" />} colSpan="md:col-span-2"
            content={<div className="h-16 bg-primary/5 rounded-lg border border-dashed border-primary/20" />}
          />
          <BentoCard
            index={1} title="Spam Detection" icon={<Zap className="w-5 h-5" />}
            content={<div className="h-16 bg-accent/5 rounded-lg border border-dashed border-accent/20" />}
          />
          <BentoCard
            index={2} title="Security Audit" icon={<Shield className="w-5 h-5" />}
            content={<div className="h-16 bg-verdict-safe/5 rounded-lg border border-dashed border-verdict-safe/20" />}
          />
          <GlowCard className="md:col-span-4 p-8">
            <h3 className="h3-heading mb-2">Interactive Hover Glow</h3>
            <p className="body-default">Dynamic radial glow effect with Framer Motion.</p>
          </GlowCard>
        </div>
      </Section>

      <Section padding="none" className="space-y-6">
        <h2 className="h2-heading">Reveal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Reveal key={i} delay={i * 0.2}>
              <Card className="p-6">
                <Search className="w-8 h-8 text-primary mb-4" />
                <h4 className="h4-heading mb-2">Staggered Entry {i}</h4>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </Container>
  );
}

