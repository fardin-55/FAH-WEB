export const checkEnv = () => {
  const required = [
    'NEXT_PUBLIC_APP_URL',
    'NEXTAUTH_SECRET',
    'DATABASE_URL',
    'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY',
    'STRIPE_SECRET_KEY',
    'STRIPE_WEBHOOK_SECRET',
    'NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID',
    'NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID',
  ];

  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.error('⚠️  Missing required environment variables:', missing.join(', '));
  }
};
