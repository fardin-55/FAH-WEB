/* eslint-disable no-console */

export async function checkSafeBrowsing(url: string): Promise<{ status: 'pass' | 'warn' | 'fail' | 'unavailable'; message: string; threatType?: string }> {
  try {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const res = await fetch(`${origin}/api/safe-browsing`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
      cache: 'no-store',
    });

    if (!res.ok) {
      return { status: 'unavailable', message: 'Safe Browsing could not be checked. Result is incomplete.' };
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error('[SafeBrowsing Client] Error calling safe-browsing api');
    return { status: 'unavailable', message: 'Safe Browsing could not be checked. Result is incomplete.' };
  }
}

