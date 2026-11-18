import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url } = body;

    if (!url || typeof url !== 'string' || url.length > 2048) {
      return NextResponse.json({ error: 'Invalid URL input' }, { status: 400 });
    }

    let parsed: URL;
    try {
      parsed = new URL(url);
    } catch {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
    }

    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return NextResponse.json({ error: 'Invalid protocol' }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_SAFE_BROWSING_API_KEY;
    if (!apiKey) {
      // eslint-disable-next-line no-console
      console.error('[SafeBrowsing API] API key variable is missing');
      return NextResponse.json({ status: 'unavailable', message: 'Safe Browsing could not be checked. Result is incomplete.' });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
      const response = await fetch(`https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client: { clientId: 'shieldscan', clientVersion: '1.0.0' },
          threatInfo: {
            threatTypes: ['MALWARE', 'SOCIAL_ENGINEERING', 'UNWANTED_SOFTWARE', 'POTENTIALLY_HARMFUL_APPLICATION'],
            platformTypes: ['ANY_PLATFORM'],
            threatEntryTypes: ['URL'],
            threatEntries: [{ url: parsed.toString() }],
          },
        }),
        signal: controller.signal,
        cache: 'no-store',
      });

      clearTimeout(timeout);

      if (!response.ok) {
        const errorText = await response.text();
        // eslint-disable-next-line no-console
        console.error(`[SafeBrowsing API] HTTP ${response.status}: ${errorText.substring(0, 100)}`);
        return NextResponse.json({ status: 'unavailable', message: 'Safe Browsing could not be checked. Result is incomplete.' });
      }

      const data = await response.json();

      if (data.matches && data.matches.length > 0) {
        const match = data.matches[0];
        return NextResponse.json({
          status: 'fail',
          threatType: match.threatType,
          message: `Flagged as ${match.threatType}`,
        });
      }

      return NextResponse.json({ status: 'pass', message: 'No threats found' });
    } catch (fetchError: unknown) {
      clearTimeout(timeout);
      // eslint-disable-next-line no-console
      console.error('[SafeBrowsing API] Fetch error occurred');
      return NextResponse.json({ status: 'unavailable', message: 'Safe Browsing could not be checked. Result is incomplete.' });
    }
  } catch (err: unknown) {
    return NextResponse.json({ status: 'unavailable', message: 'Safe Browsing could not be checked. Result is incomplete.' }, { status: 500 });
  }
}
