import styles from './currentStage.module.scss';
import { useAppSelector } from '../state/hooks';
import { selectStage } from '../state/stateSlice';
import Selection from '../Selection';
import Payment from '../Payment';
import Confirmation from '../Confirmation';
import Navigation from '../Navigation';
import type { RenderNavigation } from '../shared/types';

const CurrentStage = () => {
  const navigation: RenderNavigation = (props) => <Navigation {...props} />;
  const stage = useAppSelector(selectStage);
  switch (stage) {
    case 'selection':
      return <Selection navigation={navigation} />;
    case 'payment':
      return <Payment navigation={navigation} />;
    case 'confirmation':
      return <Confirmation navigation={navigation} />;
    default:
      return null;
  }
};

export default CurrentStage;
