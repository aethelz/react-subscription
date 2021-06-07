import styles from './selection.module.scss';
import { useAppSelector, useAppDispatch } from '../state/hooks';
import { fillSubscriptionData } from '../state/stateSlice';
import { defaultSubscriptionSettings } from '../shared/CONSTANTS';

const Selection = () => {
  // const stage = useAppSelector(selectStage);
  const dispatch = useAppDispatch();
  return (
    <header className={styles.wrapper}>
      <button
        onClick={() =>
          dispatch(fillSubscriptionData(defaultSubscriptionSettings))
        }
      >
        FILL SUBSCRIPTION
      </button>
    </header>
  );
};

export default Selection;
