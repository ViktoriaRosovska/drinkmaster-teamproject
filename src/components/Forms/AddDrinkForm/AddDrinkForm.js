import minuIcon from '../../../assets/images/addDrink/MinusForm.svg';
import plusIcon from '../../../assets/images/addDrink/PlusForm.svg';

import {
  QuantityBtn,
  QuantityBtnMirror,
  QuantityContainer,
  QuantityIconReactSvg,
  QuantityIngredients,
  QuantityText,
} from './AddDrinkForm.styled';
import WhiteLinkBtn from '../../Buttons/WhiteLinkBtn/WhiteLinkBtn';

// import ingredients from '../../../helpers/Data/ingredients.json';

import { DrinkDescriptionFields } from '../../DrinkDescriptionFields/DrinkDescriptionFields';
import { useState } from 'react';

import Subtitle from 'components/Typography/Subtitle/Subtitle';
import DrinkRecipePreparation from 'components/DrinkRecipePreparation/DrinkRecipePreparation';
import DrinkIngridientsFields from 'components/DrinkIngredientsFields/DrinkIngredientsFields';

// import chevronUp from '../../assets/images/addDrink/chevron-up.svg';
// import { ReactSVG } from 'react-svg';

export default function AddDrinkForm() {
  const [quantityValue, setQuantityValue] = useState(1);
  // const changeValue = e => {
  // setValue(e.currentTarget.value);

  const onFormSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.elements.glassSelect.value);
    console.log(e.currentTarget.elements.typeDrink.value);
  };

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
    <>
      <form onSubmit={onFormSubmit} style={{ marginBottom: '80px' }}>
        <DrinkDescriptionFields />

        <>
          <QuantityContainer>
            <Subtitle title="Ingredients" />
            <QuantityIngredients>
              <QuantityBtn onClick={onMinusQuantityHandler}>
                <QuantityIconReactSvg src={minuIcon} />
              </QuantityBtn>
              <QuantityText>{quantityValue}</QuantityText>
              <QuantityBtnMirror onClick={onPlusQuantityHandler}>
                <QuantityIconReactSvg src={plusIcon} />
              </QuantityBtnMirror>
            </QuantityIngredients>
          </QuantityContainer>
        </>
        <DrinkIngridientsFields />
        <DrinkRecipePreparation />
        <WhiteLinkBtn type="submit" title="Add" />
      </form>
    </>
  );
}
