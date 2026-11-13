export type SpamRiskLevel = 'safe' | 'moderate' | 'high_spam' | 'phishing';

export interface SpamTrigger {
  id: string;
  category: 'urgency' | 'financial' | 'phishing' | 'formatting' | 'suspicious_link';
  textSnippet: string;
  explanation: string;
  severity: 'low' | 'medium' | 'high';
}

export interface SpamScanResult {
  id: string;
  text: string;
  timestamp: number;
  score: number;
  riskLevel: SpamRiskLevel;
  summary: string;
  triggers: SpamTrigger[];
  stats: {
    wordCount: number;
    capsPercentage: number;
    exclamationCount: number;
    linkCount: number;
  };
}
