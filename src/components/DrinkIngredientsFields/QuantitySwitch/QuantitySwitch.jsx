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

export default function QuantitySwitch({ value, setValue }) {
  const onMinusQuantityHandler = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };
  const onPlusQuantityHandler = () => {
    if (value < 20) {
      setValue(value + 1);
    }
  };
  return (
    <QuantityContainer>
      <QuantityIngredients>
        <QuantityBtn onClick={onMinusQuantityHandler} type="button">
          <QuantityIconReactSvg src={minusIcon} />
        </QuantityBtn>
        <QuantityText>{value}</QuantityText>
        <QuantityBtnMirror onClick={onPlusQuantityHandler} type="button">
          <QuantityIconReactSvg src={plusIcon} />
        </QuantityBtnMirror>
      </QuantityIngredients>
    </QuantityContainer>
  );
}
