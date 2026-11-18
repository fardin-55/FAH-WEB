'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { GlassCard } from '@/components/common/GlassCard';
import { Mail, ShieldAlert } from 'lucide-react';
import { EmailAddressChecker } from './EmailAddressChecker';
import { SpamDetectorTab } from '../spam-detector/SpamDetectorTab';

export function EmailTools() {
  return (
    <div className="space-y-8">
      <div className="relative group perspective">
        {/* 3D Visual */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="relative transform transition-transform duration-500 hover:rotate-6 flex items-center justify-center mb-8 bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)]">
                <ShieldAlert className="w-8 h-8 text-white" />
            </div>
            <div className="ml-6">
                <h2 className="text-xl font-bold text-white">Security Intelligence Suite</h2>
                <p className="text-slate-400 text-sm">Professional grade analysis tools</p>
            </div>
        </div>
      </div>

      <GlassCard className="p-1">
        <Tabs defaultValue="address" className="w-full">
          <TabsList className="w-full grid grid-cols-2 p-1 bg-slate-900/50">
            <TabsTrigger value="address" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Check
            </TabsTrigger>
            <TabsTrigger value="spam" className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              Spam Check
            </TabsTrigger>
          </TabsList>
          <div className="p-6">
            <TabsContent value="address">
              <EmailAddressChecker />
            </TabsContent>
            <TabsContent value="spam">
              <SpamDetectorTab />
            </TabsContent>
          </div>
        </Tabs>
      </GlassCard>
    </div>
  );
}
