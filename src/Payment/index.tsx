import styles from './payment.module.scss';
import Paycard from './Paycard';
import { useAppSelector, useAppDispatch } from '../state/hooks';
import { fillPaymentData, selectPaymentData } from '../state/stateSlice';

const Payment = () => {
  const paymentData = useAppSelector(selectPaymentData) ?? undefined;
  const dispatch = useAppDispatch();
  return (
    <div className={styles.wrapper}>
      <Paycard
        initialState={paymentData}
        onSave={(v) => dispatch(fillPaymentData(v))}
      />
    </div>
  );
};

export default Payment;
