export type RiskLevel = 'safe' | 'suspicious' | 'dangerous';

export interface CheckItem {
  id: string;
  category: 'protocol' | 'domain' | 'structure' | 'reputation' | 'ssl';
  title: string;
  description: string;
  status: 'passed' | 'warning' | 'failed';
  impact: 'low' | 'medium' | 'high';
}

export interface ProScanDetails {
  domainAge: string;
  registrar: string;
  sslIssuer: string;
  sslValidUntil: string;
  ipAddress: string;
  reputationDatabaseStatus: string;
}

export interface UrlScanResult {
  id: string;
  url: string;
  hostname: string;
  timestamp: number;
  score: number;
  riskLevel: RiskLevel;
  summary: string;
  checks: CheckItem[];
  proDetails?: ProScanDetails;
}
