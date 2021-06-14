import { useAppDispatch, useAppSelector } from '../state/hooks';
import {
  updateDuration,
  updateGbSize,
  updateUpfrontPayment,
  selectSubscriptionData,
} from '../state/stateSlice';
import Options from './Options';
import type { WithNavigation } from '../shared/types';
import { durationOptions, gbSizeOptions } from '../shared/CONSTANTS';

type Props = {} & WithNavigation;
const Selection = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const { duration, gbSize, upfrontPayment } = useAppSelector(
    selectSubscriptionData,
  );
  const setGbSize = (size: number) => dispatch(updateGbSize(size));
  const setDuration = (duration: number) => dispatch(updateDuration(duration));
  const setUpfrontPayment = (isUpfront: boolean) =>
    dispatch(updateUpfrontPayment(isUpfront));

  return (
    <>
      <Options
        values={durationOptions}
        selected={duration}
        onChange={setDuration}
        unit="months"
      />
      <Options
        values={gbSizeOptions}
        selected={gbSize}
        onChange={setGbSize}
        unit="GB"
      />

      <div className="has-text-centered">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={upfrontPayment}
            onChange={({ currentTarget: { checked } }) =>
              setUpfrontPayment(checked)
            }
          />
          <span className="title is-5 ml-2">Pay Upfront</span>
        </label>
      </div>

      {navigation({})}
    </>
  );
};

export default Selection;
