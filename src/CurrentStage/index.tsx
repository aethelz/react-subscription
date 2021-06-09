import { useAppSelector } from '../state/hooks';
import { selectStage } from '../state/stateSlice';
import Selection from '../Selection';
import Payment from '../Payment';
import Confirmation from '../Confirmation';
import type { WithNavigation } from '../shared/types';

type Props = {} & WithNavigation;
const CurrentStage = ({ navigation }: Props) => {
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
