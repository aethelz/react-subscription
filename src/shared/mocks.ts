import type { SubscriptionPlans } from './types';

export const mockResponse: SubscriptionPlans = {
  subscription_plans: [
    { duration_months: 3, price_usd_per_gb: 3 },
    { duration_months: 6, price_usd_per_gb: 2.5 },
    { duration_months: 12, price_usd_per_gb: 2 },
  ],
};
