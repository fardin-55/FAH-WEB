import { ScanResult } from './types.js';
import { checkSafeBrowsing } from './checks/google-safe-browsing';

export async function scanWebsite(url: string): Promise<ScanResult> {
  const checks: ScanResult['checks'] = [];
  let score = 100;

  // 1. Google Safe Browsing Check (Free)
  const sbResult = await checkSafeBrowsing(url);
  checks.push({
    name: 'Google Safe Browsing',
    status: sbResult.status,
    message: sbResult.status === 'fail' ? (sbResult.threatType || 'Dangerous Threat') : sbResult.message,
  });

  if (sbResult.status === 'fail') {
    score = Math.min(score, 10); // Force low score on confirmed threat
  } else if (sbResult.status === 'unavailable') {
    score -= 5;
  }

  // Final Verdict Logic
  let verdict: 'Safe' | 'Suspicious' | 'Dangerous' = 'Safe';
  if (sbResult.status === 'fail' || score < 40) verdict = 'Dangerous';
  else if (score < 70) verdict = 'Suspicious';

  return {
    score: Math.max(0, score),
    verdict,
    checks,
    timestamp: new Date().toISOString(),
  };
}
