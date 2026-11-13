'use client';

import dynamic from 'next/dynamic';

const HomeClient = dynamic(() => import('./HomeClient'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#070b14] flex items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
    </div>
  ),
});

export default function Page() {
  return <HomeClient />;
}
