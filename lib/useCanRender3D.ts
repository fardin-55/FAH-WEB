import { useState, useEffect } from 'react';

export function useCanRender3D() {
  const [canRender, setCanRender] = useState(true);

  useEffect(() => {
    // Check hardware
    const isMobile = window.innerWidth < 768;
    const cores = navigator.hardwareConcurrency || 4;
    const memory = (navigator as any).deviceMemory || 4;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMobile || cores <= 2 || memory <= 2 || reducedMotion) {
      setCanRender(false);
    }

    // WebGL Check
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setCanRender(false);
    } catch (e) {
      setCanRender(false);
    }
  }, []);

  return canRender;
}
