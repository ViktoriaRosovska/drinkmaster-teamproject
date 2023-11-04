import Subtitle from 'components/Typography/Subtitle/Subtitle';
import {
  AddFormTextarea,
  RecipeWrapper,
} from './DrinkRecipePreparation.styled';
import { useState } from 'react';

export default function DrinkRecipePreparation({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
}) {
  const [instructions, setInstruction] = useState('');

  const onResipeChange = e => {
    const { value } = e.target;
    setInstruction(value);
    setFieldValue('instructions', value);
  };
  console.log(instructions);
  return (
    <>
      <RecipeWrapper>
        <Subtitle title="Recipe Preparation" />
        <label htmlFor="addDrinkFormTextarea">Enter the recipe</label>
        <AddFormTextarea
          id="addDrinkFormTextarea"
          name="instructions"
          value={instructions}
          onChange={onResipeChange}
        ></AddFormTextarea>
      </RecipeWrapper>
    </>
  );
}
