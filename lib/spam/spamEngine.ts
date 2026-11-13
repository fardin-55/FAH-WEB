import { SPAM_KEYWORDS } from './keywordDictionary';
import { SpamScanResult, SpamTrigger, SpamRiskLevel } from '@/types/spam.types';

export function analyzeSpam(text: string): SpamScanResult {
  const trimmed = text.trim();
  const wordCount = trimmed ? trimmed.split(/\s+/).length : 0;
  
  if (wordCount === 0) {
    return {
      id: 'spam_' + Math.random().toString(36).substring(2, 9),
      text: '',
      timestamp: Date.now(),
      score: 0,
      riskLevel: 'safe',
      summary: 'No text provided for analysis.',
      triggers: [],
      stats: { wordCount: 0, capsPercentage: 0, exclamationCount: 0, linkCount: 0 }
    };
  }

  const letters = trimmed.replace(/[^a-zA-Z]/g, '');
  const uppercaseLetters = letters.replace(/[^A-Z]/g, '');
  const capsPercentage = letters.length > 0 ? Math.round((uppercaseLetters.length / letters.length) * 100) : 0;

  const exclamationCount = (trimmed.match(/!/g) || []).length;
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\b)/g;
  const links = trimmed.match(urlRegex) || [];
  const linkCount = links.length;

  const triggers: SpamTrigger[] = [];
  let score = 0;

  for (const keyword of SPAM_KEYWORDS.urgency) {
    if (trimmed.toLowerCase().includes(keyword)) {
      score += 15;
      triggers.push({
        id: 'urg_' + Math.random().toString(36).substring(2, 6),
        category: 'urgency',
        textSnippet: keyword,
        explanation: `Creates artificial urgency ("${keyword}") to rush the recipient.`,
        severity: 'medium'
      });
    }
  }

  for (const keyword of SPAM_KEYWORDS.financial) {
    if (trimmed.toLowerCase().includes(keyword)) {
      score += 20;
      triggers.push({
        id: 'fin_' + Math.random().toString(36).substring(2, 6),
        category: 'financial',
        textSnippet: keyword,
        explanation: `References high-risk financial or monetary terms ("${keyword}").`,
        severity: 'high'
      });
    }
  }

  for (const keyword of SPAM_KEYWORDS.phishing) {
    if (trimmed.toLowerCase().includes(keyword)) {
      score += 25;
      triggers.push({
        id: 'phi_' + Math.random().toString(36).substring(2, 6),
        category: 'phishing',
        textSnippet: keyword,
        explanation: `Classic credential harvesting or account verification trap ("${keyword}").`,
        severity: 'high'
      });
    }
  }

  if (capsPercentage > 40) {
    score += 20;
    triggers.push({
      id: 'caps',
      category: 'formatting',
      textSnippet: 'EXCESSIVE CAPS',
      explanation: `${capsPercentage}% of letters are uppercase.`,
      severity: 'medium'
    });
  }

  if (exclamationCount > 4) {
    score += 15;
    triggers.push({
      id: 'punct',
      category: 'formatting',
      textSnippet: '!!!',
      explanation: `Found ${exclamationCount} exclamation marks, typical of sensationalized spam.`,
      severity: 'low'
    });
  }

  const finalScore = Math.min(Math.max(score, 0), 100);
  let riskLevel: SpamRiskLevel = 'safe';
  let summary = 'This text appears clean and exhibits normal conversational patterns.';

  if (finalScore >= 75) {
    riskLevel = 'phishing';
    summary = 'Severe phishing threat! Contains high-risk scam indicators.';
  } else if (finalScore >= 45) {
    riskLevel = 'high_spam';
    summary = 'High spam probability detected.';
  } else if (finalScore >= 20) {
    riskLevel = 'moderate';
    summary = 'Moderate spam indicators found.';
  }

  return {
    id: 'spam_' + Math.random().toString(36).substring(2, 9),
    text,
    timestamp: Date.now(),
    score: finalScore,
    riskLevel,
    summary,
    triggers,
    stats: {
      wordCount,
      capsPercentage,
      exclamationCount,
      linkCount
    }
  };
}
