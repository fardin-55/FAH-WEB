import { z } from 'zod';

export const UrlSchema = z.string().url().refine((url) => {
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
}, { message: "Invalid URL or protocol" });

export const ScanResultSchema = z.object({
  score: z.number().min(0).max(100),
  verdict: z.enum(['Safe', 'Suspicious', 'Dangerous']),
  checks: z.array(z.object({
    name: z.string(),
    status: z.enum(['pass', 'warn', 'fail', 'unavailable']),
    message: z.string(),
  })),
  timestamp: z.string(),
});

export type ScanResult = z.infer<typeof ScanResultSchema>;
