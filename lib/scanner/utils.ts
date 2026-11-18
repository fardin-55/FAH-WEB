import { z } from 'zod';

export const urlSchema = z.string().url().refine((url) => {
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
}, 'Invalid URL protocol');

export async function isSafeUrl(url: string): Promise<boolean> {
  try {
    const parsed = new URL(url);
    // Block private/local IPs
    const privateIPs = ['127.0.0.1', 'localhost', '192.168.', '10.', '172.16.'];
    if (privateIPs.some(ip => parsed.hostname.includes(ip))) return false;
    return true;
  } catch {
    return false;
  }
}
