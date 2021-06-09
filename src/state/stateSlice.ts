import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../state/store';
import type {
  State,
  SubscriptionSettings,
  ConfirmationSettings,
  CardData,
} from '../shared/types';
import { defaultSubscriptionSettings } from '../shared/CONSTANTS';

const initialState: State = {
  stage: 'selection',
  subscriptionData: defaultSubscriptionSettings,
  paymentData: null,
  confirmationData: null,
};

export const sunscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    nextStage: (state) => {
      switch (state.stage) {
        case 'selection':
          if (state.subscriptionData) {
            if (state.subscriptionData.upfrontPayment) {
              state.stage = 'payment';
            } else {
              state.stage = 'confirmation';
              // Flush payment details in case user changes his mind about
              // upfront payment
              if (!state.subscriptionData.upfrontPayment) {
                state.paymentData = null;
              }
            }
          }
          break;
        case 'payment':
          if (state.paymentData) {
            state.stage = 'confirmation';
          }
      }
    },
    previousStage: (state) => {
      switch (state.stage) {
        case 'payment':
          state.stage = 'selection';
          break;
        case 'confirmation':
          if (state.paymentData) {
            state.stage = 'payment';
          } else {
            state.stage = 'selection';
          }
      }
    },
    fillSubscriptionData: (
      state,
      action: PayloadAction<SubscriptionSettings>,
    ) => {
      state.subscriptionData = action.payload;
    },
    fillPaymentData: (state, action: PayloadAction<CardData>) => {
      state.paymentData = action.payload;
    },
    fillConfirmationData: (
      state,
      action: PayloadAction<ConfirmationSettings>,
    ) => {
      state.confirmationData = action.payload;
    },
  },
});

export const {
  nextStage,
  previousStage,
  fillSubscriptionData,
  fillPaymentData,
  fillConfirmationData,
} = sunscriptionSlice.actions;

export const selectConfirmationData = (state: RootState) =>
  state.subscription.confirmationData;
export const selectSubscriptionData = (state: RootState) =>
  state.subscription.subscriptionData;
export const selectStage = (state: RootState) => state.subscription.stage;
export const selectPaymentData = (state: RootState) =>
  state.subscription.paymentData;

export default sunscriptionSlice.reducer;
