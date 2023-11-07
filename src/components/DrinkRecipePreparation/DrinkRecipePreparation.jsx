import '../../../src/index';
import Subtitle from 'components/Typography/Subtitle/Subtitle';
import {
  AddFormTextarea,
  RecipeWrapper,
  ResipeLabel,
} from './DrinkRecipePreparation.styled';
import { useRef, useState } from 'react';
import { RelativeWrapper } from 'components/Forms/AddDrinkForm/AddDrinkForm.styled';
import { ShowError } from 'components/ShowError/ShowError';

export default function DrinkRecipePreparation({
  values,
  errors,
  touched,
  setFieldValue,
}) {
  const [instructions, setInstruction] = useState('');

  const onResipeChange = e => {
    const { value } = e.target;
    setInstruction(value);
    setFieldValue('instructions', value);
  };
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
        <RelativeWrapper>
          <AddFormTextarea
            onFocus={hanleTextareaFocus}
            onBlur={hanleTextareaBlur}
            id="addDrinkFormTextarea"
            name="instructions"
            value={instructions}
            onChange={onResipeChange}
            ref={textArea}
            error={
              errors.instructions && touched.instructions ? 'true' : 'false'
            }
            success={
              values.instructions && !errors.instructions ? 'true' : 'false'
            }
          ></AddFormTextarea>
          {touched.instructions && errors.instructions ? (
            <ShowError message={errors.instructions} />
          ) : null}
        </RelativeWrapper>
      </RecipeWrapper>
    </>
  );
}
