import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import subscriptionReducer from './stateSlice';

export const store = configureStore({
  reducer: {
    subscription: subscriptionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
