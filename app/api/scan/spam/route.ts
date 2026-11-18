import { NextRequest, NextResponse } from 'next/server';
import { analyzeSpam } from '@/lib/spam/spamEngine';
import { checkAndConsumeQuota } from '@/lib/quota/quotaService';

export async function POST(req: NextRequest) {
  try {
    const { text, userId } = await req.json();
    
    // 1. Quota Check
    const quota = await checkAndConsumeQuota(userId || 'anonymous');
    if (!quota.allowed) {
        return NextResponse.json({ error: 'Scan limit reached. Please upgrade to Pro.' }, { status: 403 });
    }

    if (!text || typeof text !== 'string') {
      return NextResponse.json({ error: 'Please provide valid text' }, { status: 400 });
    }

    const result = analyzeSpam(text);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
