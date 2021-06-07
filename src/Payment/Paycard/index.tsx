import { useState, useRef, useCallback } from 'react';
import CForm from './components/form';
import Card from './components/card';
import type { CardData } from '../../shared/types';
import { defaultPaymentData } from '../../shared/CONSTANTS';

type Props = {
  onSave: (v: CardData) => void;
  initialState?: CardData;
};
const MainScreen = ({ onSave, initialState = defaultPaymentData }: Props) => {
  const [state, setState] = useState({
    ...initialState,
    cardHolder: 'CARD HOLDER',
    isCardFlipped: false,
  });
  const [currentFocusedElm, setCurrentFocusedElm] = useState(null);

  const updateStateValues = useCallback(
    (keyName, value) => {
      setState({
        ...state,
        // @ts-ignore
        [keyName]: value || initialState[keyName],
      });
    },
    [state],
  );

  // References for the Form Inputs used to focus corresponding inputs.
  let formFieldsRefObj = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
    cardCvv: useRef(),
  };

  let focusFormFieldByKey = useCallback((key) => {
    // @ts-ignore
    formFieldsRefObj[key].current.focus();
  }, []);

  // This are the references for the Card DIV elements.
  let cardElementsRef = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
  };

  // @ts-ignore
  let onCardFormInputFocus = (_event, inputName) => {
    // @ts-ignore
    const refByName = cardElementsRef[inputName];
    setCurrentFocusedElm(refByName);
  };

  const onCardInputBlur = useCallback(() => {
    setCurrentFocusedElm(null);
  }, []);

  const doSubmit = () => {
    onSave(state);
  };

  return (
    <div className="wrapper">
      <CForm
        handleSubmit={doSubmit}
        cardMonth={state.cardMonth}
        cardYear={state.cardYear}
        onUpdateState={updateStateValues}
        cardNumberRef={formFieldsRefObj.cardNumber}
        cardHolderRef={formFieldsRefObj.cardHolder}
        cardDateRef={formFieldsRefObj.cardDate}
        cardCvv={formFieldsRefObj.cardCvv}
        onCardInputFocus={onCardFormInputFocus}
        onCardInputBlur={onCardInputBlur}
      >
        <Card
          cardNumber={state.cardNumber}
          cardHolder={state.cardHolder}
          cardMonth={state.cardMonth}
          cardYear={state.cardYear}
          cardCvv={state.cardCvv}
          isCardFlipped={state.isCardFlipped}
          currentFocusedElm={currentFocusedElm}
          onCardElementClick={focusFormFieldByKey}
          cardNumberRef={cardElementsRef.cardNumber}
          cardHolderRef={cardElementsRef.cardHolder}
          cardDateRef={cardElementsRef.cardDate}
        ></Card>
      </CForm>
    </div>
  );
};

export default MainScreen;
