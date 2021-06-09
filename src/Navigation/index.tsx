import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { nextStage, previousStage, selectStage } from '../state/stateSlice';

const defaultNextContent = (
  <>
    <span>Next</span>
    <span className="icon is-small">
      <i className="fas fa-chevron-right"></i>
    </span>
  </>
);

export type Props = {
  formFilled?: boolean;
  onNext?: () => void;
  onPrevious?: () => void;
  nextButtonContent?: JSX.Element;
  nextButtonLoading?: boolean;
};
const Navigation = ({
  formFilled = true,
  onNext = () => {},
  onPrevious = () => {},
  nextButtonContent = defaultNextContent,
  nextButtonLoading = false,
}: Props) => {
  const dispatch = useAppDispatch();
  const stage = useAppSelector(selectStage);

  return (
    <div className="buttons is-justify-content-space-between mt-5">
      <button
        className="button is-primary is-outlined"
        disabled={stage === 'selection'}
        onClick={() => {
          onPrevious();
          dispatch(previousStage());
        }}
      >
        <span className="icon is-small">
          <i className="fas fa-chevron-left"></i>
        </span>
        <span>Back</span>
      </button>
      <button
        disabled={!formFilled}
        className={classNames('button', 'is-primary', {
          'is-loading': nextButtonLoading,
        })}
        onClick={() => {
          onNext();
          dispatch(nextStage());
        }}
      >
        {nextButtonContent}
      </button>
    </div>
  );
};

export default Navigation;
