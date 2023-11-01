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

export default function QuantitySwitch({ getTotalValue }) {
  const [quantityValue, setQuantityValue] = useState(1);

  const handleSwitch = () => {
    getTotalValue(quantityValue);
    console.log(quantityValue);
  };
  const onMinusQuantityHandler = () => {
    if (quantityValue > 1) {
      setQuantityValue(quantityValue - 1);
      handleSwitch(quantityValue);
    } else {
      setQuantityValue(1);
      handleSwitch(quantityValue);
    }
  };
  const onPlusQuantityHandler = () => {
    if (quantityValue < 20) {
      setQuantityValue(quantityValue + 1);
      handleSwitch(quantityValue);
    } else {
      setQuantityValue(quantityValue);
      handleSwitch(quantityValue);
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
