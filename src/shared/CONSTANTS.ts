import type { SubscriptionSettings, CardData } from './types';

const defaultSubscriptionSettings: SubscriptionSettings = {
  duration: 12,
  gbSize: 5,
  upfrontPayment: false,
};

const durationOptions = [3, 6, 12];
const gbSizeOptions = [5, 10, 50];

const defaultPaymentData: CardData = {
  cardNumber: '#### #### #### ####',
  cardMonth: '',
  cardYear: '',
  cardCvv: '',
};

export {
  defaultSubscriptionSettings,
  defaultPaymentData,
  durationOptions,
  gbSizeOptions,
};
