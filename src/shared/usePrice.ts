import { useEffect, useState } from 'react';
import type { SubscriptionPlans, SubscriptionSettings } from './types';
import { fetchPrices } from './api';

type HookReturn = {
  totalPrice: number;
  pricePerGb: number;
} | null;
export default function usePrice(
  settings: SubscriptionSettings | null,
): HookReturn {
  const [prices, setPrices] = useState<null | SubscriptionPlans>(null);
  useEffect(() => {
    fetchPrices().then((res) => setPrices(res));
  }, []);

  if (!settings) {
    return null;
  }
  const { duration, gbSize, upfrontPayment } = settings;
  const discount = upfrontPayment ? 0.1 : 0;

  if (!prices) {
    return null;
  } else {
    const pricePerGb = prices.subscription_plans.find(
      (v) => v.duration_months === duration,
    )?.price_usd_per_gb;

    if (!pricePerGb) return null;

    const totalPrice = pricePerGb * gbSize * duration * (1 - discount);

    return { totalPrice, pricePerGb };
  }
}
