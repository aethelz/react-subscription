import type { SubscriptionPlans } from './types';
import { mockResponse } from './mocks';

export const fetchItems = () =>
  fetch(
    'https://cloud-storage-prices-moberries.herokuapp.com/prices',
  ).then(res => res.json() as Promise<SubscriptionPlans>);

export const mockItems = () => Promise.resolve(mockResponse);
