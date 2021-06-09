import classNames from 'classnames';
import { useEffect, useState, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../state/hooks';
import { store } from '../state/store';
import {
  fillConfirmationData,
  selectConfirmationData,
} from '../state/stateSlice';
import usePost from './usePost';
import type { WithNavigation } from '../shared/types';

type Props = {} & WithNavigation;
const Confirmation = ({ navigation }: Props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [emailValid, setEmailValid] = useState(false);
  const { post, isLoading, isSuccess, nextButtonContent } = usePost();
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
    <div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="email"
            value={email}
            placeholder="Email"
            ref={emailRef}
            onChange={({ currentTarget: { value } }) => setEmail(value)}
            size={30}
            required
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span
            className={classNames('icon', 'is-small', 'is-right', {
              'has-text-success': emailValid,
            })}
          >
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>

      <div className="has-text-centered">
        <label className="checkbox">
          <input
            name="termsAgreement"
            type="checkbox"
            checked={termsAgreement}
            onChange={({ currentTarget: { checked } }) =>
              setTermsAgreement(checked)
            }
          />
          <span className="title is-5 ml-2">
            I agree to the <a href="#">terms and conditions</a>
          </span>
        </label>
      </div>

      {navigation({
        formFilled: termsAgreement && emailValid && !isSuccess,
        onPrevious: () => {
          dispatch(fillConfirmationData({ email, termsAgreement }));
        },
        nextButtonContent,
        nextButtonLoading: isLoading,
        onNext: () => {
          dispatch(fillConfirmationData({ email, termsAgreement }));
          // If we use selector, we will get stale confirmation data in store,
          // using getState is the simplest fix for this
          post(store.getState().subscription);
        },
      })}
    </div>
  );
};

export default Confirmation;
