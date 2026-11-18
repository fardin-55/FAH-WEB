'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SecurityShield from '@/components/three/SecurityShield';
import { useCanRender3D } from '@/lib/useCanRender3D';

export function ShieldLoader() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const canRender3D = useCanRender3D();

  useEffect(() => {
    setMounted(true);
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('hasVisited', 'true');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !loading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        aria-hidden="true"
      >
        <span className="sr-only">Loading</span>
        <div className="w-64 h-64">
          {canRender3D ? (
            <SecurityShield height={256} />
          ) : (
            <div className="w-full h-full flex items-center justify-center animate-pulse text-cyan-500">
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
