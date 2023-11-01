import {
  FormContainer,
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
  // const changeValue = e => {
  // setValue(e.currentTarget.value);

  const onFormSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.elements.glassSelect.value);
    console.log(e.currentTarget.elements.typeDrink.value);
  };

  return (
    <>
      <FormContainer onSubmit={onFormSubmit} style={{ marginBottom: '80px' }}>
        <DrinkDescriptionFields />
        <DrinkIngridientsFields />
        <DrinkRecipePreparation />
        <WhiteLinkBtn type="submit" title="Add" />
      </FormContainer>
    </>
  );
}
