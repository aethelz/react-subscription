import styles from './navigation.module.scss';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { nextStage, previousStage, selectStage } from '../state/stateSlice';

export type Props = {
  formFilled?: boolean;
  onNext?: () => void;
  onPrevious?: () => void;
};
const Navigation = ({
  formFilled = true,
  onNext = () => {},
  onPrevious = () => {},
}: Props) => {
  const dispatch = useAppDispatch();
  const stage = useAppSelector(selectStage);

  return (
    <div>
      <button
        disabled={stage === 'selection'}
        onClick={() => {
          onPrevious();
          dispatch(previousStage());
        }}
      >
        Back
      </button>
      <button
        disabled={!formFilled}
        onClick={() => {
          onNext();
          dispatch(nextStage());
        }}
      >
        {stage === 'confirmation' ? 'Confirm' : 'Next'}
      </button>
    </div>
  );
};

export default Navigation;
