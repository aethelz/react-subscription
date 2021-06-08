import styles from './payment.module.scss';
import Paycard from './Paycard';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../state/hooks';
import { fillPaymentData, selectPaymentData } from '../state/stateSlice';
import type { WithNavigation } from '../shared/types';
import { cardDataToInternal } from '../shared/utils';
import { defaultPaymentData } from '../shared/CONSTANTS';

type Props = {} & WithNavigation;
const Payment = ({ navigation }: Props) => {
  const paymentData = useAppSelector(selectPaymentData) ?? defaultPaymentData;
  const initialInternalState = cardDataToInternal(paymentData);
  const dispatch = useAppDispatch();
  const [state, setState] = useState(() => cardDataToInternal(paymentData));
  const formFilled = [
    !state.cardNumber.startsWith('#') && state.cardNumber.length === 19 ,
    state.cardCvv.length === 3,
    state.cardYear,
    state.cardMonth,
  ].every(Boolean);

  return (
    <div className={styles.wrapper}>
      <Paycard
        initialState={initialInternalState}
        state={state}
        setState={setState}
      />
      {navigation({
        formFilled,
        onNext: () => dispatch(fillPaymentData(state)),
      })}
    </div>
  );
};

export default Payment;
