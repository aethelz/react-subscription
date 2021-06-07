import type { SubscriptionPlans, State } from './types';
import { mockResponse } from './mocks';

export const fetchPrices = () =>
  fetch('https://cloud-storage-prices-moberries.herokuapp.com/prices').then(
    (res) => res.json() as Promise<SubscriptionPlans>,
  );

export const postData = (state: State) =>
  fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(state),
  }).then((res) => res.json() as Promise<any>);

export const mockPrices = () => Promise.resolve(mockResponse);
