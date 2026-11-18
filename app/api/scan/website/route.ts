import { NextRequest, NextResponse } from 'next/server';
import { scanWebsite } from '@/lib/scanner/engine';
import { UrlSchema } from '@/lib/scanner/types';
import { checkAndConsumeQuota } from '@/lib/quota/quotaService';

export async function POST(req: NextRequest) {
  try {
    const { url, userId } = await req.json();
    
    // 1. Quota Check
    const quota = await checkAndConsumeQuota(userId || 'anonymous');
    if (!quota.allowed) {
        return NextResponse.json({ error: 'Scan limit reached. Please upgrade to Pro.' }, { status: 403 });
    }

    // 2. Validate URL
    const parseResult = UrlSchema.safeParse(url);
    if (!parseResult.success) {
      return NextResponse.json({ error: 'Please enter a valid URL' }, { status: 400 });
    }

    const result = await scanWebsite(parseResult.data);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
