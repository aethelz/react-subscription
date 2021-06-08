import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import {
  fillSubscriptionData,
  selectSubscriptionData,
} from '../state/stateSlice';
import type { WithNavigation } from '../shared/types';

type Props = {} & WithNavigation;
const Selection = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const planData = useAppSelector(selectSubscriptionData);
  const [duration, setDuration] = useState(planData.duration);
  const [gbSize, setGbSize] = useState(planData.gbSize);
  const [upfrontPayment, setUpfrontPayment] = useState(planData.upfrontPayment);

  useEffect(() => {
    dispatch(fillSubscriptionData({ duration, gbSize, upfrontPayment }));
  }, [gbSize, duration, upfrontPayment]);
  return (
    <header className={styles.wrapper}>
      <label>
        Duration
        <select
          value={duration}
          onChange={({ currentTarget: { value } }) =>
            setDuration(Number(value))
          }
        >
          {[3, 6, 12].map((v) => (
            <option value={v} key={v}>
              {v}
            </option>
          ))}
        </select>
      </label>

      <label>
        Gigabytes
        <select
          value={gbSize}
          onChange={({ currentTarget: { value } }) => setGbSize(Number(value))}
        >
          {[5, 10, 50].map((v) => (
            <option value={v} key={v}>
              {v}
            </option>
          ))}
        </select>
      </label>

      <label>
        Upfront Payment
        <input
          type="checkbox"
          checked={upfrontPayment}
          onChange={({ currentTarget: { checked } }) =>
            setUpfrontPayment(checked)
          }
        />
      </label>

      {navigation({})}
  );
};

export default Selection;
