import styles from './selectedPlan.module.scss';
import { useAppSelector } from '../state/hooks';
import { selectSubscriptionData } from '../state/stateSlice';
import usePrice from '../shared/usePrice';

const Confirmation = () => {
  const subscriptionData = useAppSelector(selectSubscriptionData);
  const priceSummary = usePrice(subscriptionData);

  if (!subscriptionData) return <div>No plan selected!</div>;
  if (!priceSummary) return <div>Resulting price loading...</div>;

  const { totalPrice, pricePerGb } = priceSummary;
  const { duration, gbSize, upfrontPayment } = subscriptionData;

  return (
    <div className={styles.wrapper}>
      You selected {gbSize}Gb for the duration of {duration} month
      {totalPrice ? (
        <div>
          Total: {totalPrice}
          <br />
          Price per gb: {pricePerGb}EUR
          {upfrontPayment && <div>10% discount applied!</div>}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Confirmation;
