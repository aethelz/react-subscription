import type { SubscriptionSettings, CardData } from './types';

const defaultSubscriptionSettings: SubscriptionSettings = {
  duration: 12,
  gbSize: 5,
  upfrontPayment: true,
};

const defaultPaymentData: CardData = {
  cardNumber: '#### #### #### ####',
  cardHolder: 'FULL NAME',
  cardMonth: '',
  cardYear: '',
  cardCvv: '',
};

export { defaultSubscriptionSettings, defaultPaymentData };
