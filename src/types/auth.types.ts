export type SubscriptionTier = 'free' | 'pro';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  tier: SubscriptionTier;
  avatarUrl?: string;
}

export interface DailyUsage {
  date: string; // YYYY-MM-DD
  websiteScansCount: number;
  spamScansCount: number;
}
