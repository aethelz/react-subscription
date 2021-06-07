import styles from './confirmation.module.scss';
import { useAppSelector, useAppDispatch } from '../state/hooks';
import { fillConfirmationData } from '../state/stateSlice';

const Confirmation = () => {
  // const stage = useAppSelector(selectStage);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.wrapper}>
      <button
        onClick={() =>
          dispatch(
            fillConfirmationData({
              email: 'test@test.com',
              termsAgreement: true,
            }),
          )
        }
      >
        FILL CONFIRMATION DATA
      </button>
    </div>
  );
};

export default Confirmation;
