import styles from './confirmation.module.scss';
import { useEffect, useState, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../state/hooks';
import { store } from '../state/store';
import {
  fillConfirmationData,
  selectConfirmationData,
} from '../state/stateSlice';
import { postData } from '../shared/api';
import type { WithNavigation } from '../shared/types';

type Props = {} & WithNavigation;
const Confirmation = ({ navigation }: Props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [emailValid, setEmailValid] = useState(false);
  const confirmationData = useAppSelector(selectConfirmationData);
  const dispatch = useAppDispatch();
  const [termsAgreement, setTermsAgreement] = useState(
    confirmationData?.termsAgreement ?? true,
  );

  const [email, setEmail] = useState(confirmationData?.email ?? '');
  useEffect(() => {
    if (!emailRef.current) return;
    setEmailValid(emailRef.current.checkValidity());
  }, [email]);
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
          ref={emailRef}
          onChange={({ currentTarget: { value } }) => setEmail(value)}
          size={30}
          required
        />
      </label>

      {navigation({
        formFilled: termsAgreement && emailValid,
        onPrevious: () => {
          dispatch(fillConfirmationData({ email, termsAgreement }));
        },
        onNext: () => {
          dispatch(fillConfirmationData({ email, termsAgreement }));
          // If we use selector, we will get stale confirmation data in store,
          // using getState is the simplest fix for this
          postData(store.getState().subscription);
        },
      })}
    </div>
  );
};

export default Confirmation;
