import '../../../src/index';
import Subtitle from 'components/Typography/Subtitle/Subtitle';
import {
  AddFormTextarea,
  RecipeWrapper,
  ResipeLabel,
} from './DrinkRecipePreparation.styled';
import { useRef, useState } from 'react';

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
  // console.log(instructions);
  const textArea = useRef();
  const recipeLabel = useRef();

  const hanleTextareaFocus = e => {
    recipeLabel.current?.classList?.add('move');
  };
  const hanleTextareaBlur = e => {
    if (!e.target.value) {
      recipeLabel.current?.classList?.remove('move');
    }
  };
  return (
    <>
      <RecipeWrapper>
        <Subtitle title="Recipe Preparation" />

        <ResipeLabel
          htmlFor="addDrinkFormTextarea"
          className="recipeLabel"
          ref={recipeLabel}
        >
          Enter the recipe
        </ResipeLabel>
        <AddFormTextarea
          onFocus={hanleTextareaFocus}
          onBlur={hanleTextareaBlur}
          id="addDrinkFormTextarea"
          name="instructions"
          value={instructions}
          onChange={onResipeChange}
          ref={textArea}
          // required
        ></AddFormTextarea>
      </RecipeWrapper>
    </>
  );
}
