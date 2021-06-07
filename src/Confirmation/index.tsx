import styles from './confirmation.module.scss';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../state/hooks';
import {
  fillConfirmationData,
  selectState,
  selectConfirmationData,
} from '../state/stateSlice';
import { postData } from '../shared/api';

const Confirmation = () => {
  const state = useAppSelector(selectState);
  const confirmationData = useAppSelector(selectConfirmationData);
  const dispatch = useAppDispatch();
  const [termsAgreement, setTermsAgreement] = useState(
    confirmationData?.termsAgreement ?? true,
  );
  const [email, setEmail] = useState(confirmationData?.email ?? '');
  return (
    <div className={styles.wrapper}>
      <label>
        Terms and conditions agreement checkbox
        <input
          name="termsAgreement"
          type="checkbox"
          checked={termsAgreement}
          onChange={({ currentTarget: { checked } }) =>
            setTermsAgreement(checked)
          }
        />
      </label>
      <label>
        email
        <input
          type="email"
          value={email}
          onChange={({ currentTarget: { value } }) => setEmail(value)}
          pattern=".+@test.com"
          size={30}
          required
        />
      </label>
      <button
        disabled={!termsAgreement || !email.length}
        onClick={() => {
          postData(state);
          dispatch(fillConfirmationData({ email, termsAgreement }));
        }}
      >
        CONFIRM
      </button>
    </div>
  );
};

export default Confirmation;
