import { useState } from 'react';
import {
  QuantityBtn,
  QuantityBtnMirror,
  QuantityContainer,
  QuantityIconReactSvg,
  QuantityIngredients,
  QuantityText,
} from './QuantitySwitch.styled';

import minusIcon from '../../../assets/images/addDrink/MinusForm.svg';
import plusIcon from '../../../assets/images/addDrink/PlusForm.svg';

export default function QuantitySwitch() {
  const [quantityValue, setQuantityValue] = useState(1);
  const onMinusQuantityHandler = () => {
    if (quantityValue > 1) {
      setQuantityValue(quantityValue - 1);
    } else {
      setQuantityValue(1);
    }
  };
  const onPlusQuantityHandler = () => {
    if (quantityValue < 20) {
      setQuantityValue(quantityValue + 1);
    } else {
      setQuantityValue(quantityValue);
    }
  };
  return (
    <QuantityContainer>
      <QuantityIngredients>
        <QuantityBtn onClick={onMinusQuantityHandler}>
          <QuantityIconReactSvg src={minusIcon} />
        </QuantityBtn>
        <QuantityText>{quantityValue}</QuantityText>
        <QuantityBtnMirror onClick={onPlusQuantityHandler}>
          <QuantityIconReactSvg src={plusIcon} />
        </QuantityBtnMirror>
      </QuantityIngredients>
    </QuantityContainer>
  );
}
