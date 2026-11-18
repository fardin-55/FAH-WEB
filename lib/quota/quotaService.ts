import { Redis } from '@upstash/redis';
import { FREE_TRIAL_SCAN_LIMIT } from '../config';

// Initialize Redis if credentials exist
const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

// Fallback memory cache for dev (non-persistent)
const memoryCache = new Map<string, number>();

export async function checkAndConsumeQuota(userId: string): Promise<{ allowed: boolean; remaining: number }> {
  // If user is conceptually Pro (you'd need to fetch their tier from DB here)
  // For now, enforcing the limit globally as requested.
  
  const key = `trial:${userId}`;

  try {
    if (redis) {
      const current = await redis.incr(key);
      const remaining = Math.max(0, FREE_TRIAL_SCAN_LIMIT - current);
      return { allowed: current <= FREE_TRIAL_SCAN_LIMIT, remaining };
    } else {
      console.warn('⚠️  Redis not configured. Using non-persistent memory fallback.');
      const current = (memoryCache.get(key) || 0) + 1;
      memoryCache.set(key, current);
      const remaining = Math.max(0, FREE_TRIAL_SCAN_LIMIT - current);
      return { allowed: current <= FREE_TRIAL_SCAN_LIMIT, remaining };
    }
  } catch (err) {
    console.error('Quota check failed, defaulting to allow:', err);
    return { allowed: true, remaining: 0 };
  }
}
