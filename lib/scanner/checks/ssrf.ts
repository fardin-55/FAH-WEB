import { ScanResult } from '../types';

export const runSSRFCheck = async (url: string): Promise<boolean> => {
  const parsed = new URL(url);
  const hostname = parsed.hostname;

  // Simple check for private IPs (simplified for this context)
  const isPrivate = /^(localhost|127\.|192\.168\.|10\.|172\.(1[6-9]|2[0-9]|3[0-1])\.)/.test(hostname);
  
  return !isPrivate;
};
