import { useAppSelector } from '../state/hooks';
import { selectSubscriptionData } from '../state/stateSlice';
import usePrice from '../shared/usePrice';

const Confirmation = () => {
  const subscriptionData = useAppSelector(selectSubscriptionData);
  const priceSummary = usePrice(subscriptionData);

  if (!subscriptionData)
    return <div className="title is-5">No plan selected!</div>;
  if (!priceSummary)
    return <div className="title is-5">Resulting price loading...</div>;

  const { totalPrice, pricePerGb } = priceSummary;
  const { duration, gbSize, upfrontPayment } = subscriptionData;

  return (
    <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Storage</p>
          <p className="title">{gbSize}GB</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Duration</p>
          <p className="title">{duration} month</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Price per GB</p>
          <p className="title">{pricePerGb}€</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Total Price</p>
          <p className="title" style={{ color: upfrontPayment ? 'red' : '' }}>
            {totalPrice}€
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Confirmation;
