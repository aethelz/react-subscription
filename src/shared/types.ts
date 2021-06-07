export type SubscriptionEntry = {
  duration_months: number;
  price_usd_per_gb: number;
};
export type SubscriptionPlans = {
  subscription_plans: SubscriptionEntry[];
};
export type SubscriptionSettings = {
  duration: number;
  gbSize: number;
  upfrontPayment: boolean;
};
export type ConfirmationSettings = {
  email: string | null;
  termsAgreement: boolean;
};
export type CardData = {
  cardNumber: string;
  cardMonth: string;
  cardYear: string;
  cardCvv: string;
};
export type Stage = 'selection' | 'payment' | 'confirmation';
export type State = {
  stage: Stage;
  subscriptionData: SubscriptionSettings | null;
  paymentData: CardData | null;
  confirmationData: ConfirmationSettings | null;
};
