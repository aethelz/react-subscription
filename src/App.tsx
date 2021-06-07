import './App.scss';
import Selection from './Selection';
import Payment from './Payment';
import Confirmation from './Confirmation';

import { nextStage, previousStage, selectStage } from './state/stateSlice';
import { useAppSelector, useAppDispatch } from './state/hooks';

function App() {
  const stage = useAppSelector(selectStage);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <div>{stage}</div>
      <div>
        {stage === 'selection' ? (
          <Selection />
        ) : stage === 'payment' ? (
          <Payment />
        ) : (
          <Confirmation />
        )}
      </div>
      <button onClick={() => dispatch(previousStage())}>Back</button>
      <button onClick={() => dispatch(nextStage())}>Next</button>
    </div>
  );
}

export default App;
