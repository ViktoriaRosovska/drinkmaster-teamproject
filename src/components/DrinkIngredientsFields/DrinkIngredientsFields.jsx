import {
  CloseIconReactSvg,
  DrinkIngredientsWrapper,
  IngredientInputsWrapper,
  IngredientWrapper,
  MeasureInput,
  TitleWrapper,
} from './DrinkIngredientsFields.styled';
import closeIcon from '../../assets/images/addDrink/X.svg';

import Subtitle from 'components/Typography/Subtitle/Subtitle';
import QuantitySwitch from './QuantitySwitch/QuantitySwitch';
import { useState } from 'react';
import { UUID } from 'uuidjs';
import ingredients from '../../helpers/Data/ingredients.json';
import DrinkIngredientCustomSelect from './DrinkIngredientCustomSelect/DrinkIngredientCustomSelect';
export default function DrinkIngridientsFields({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
}) {
  const [ingr, setIngr] = useState([
    { id: UUID.generate(), ingredientId: '', measure: '' },
  ]);

  const onIngredientChange = (i, e) => {
    i.ingredientId = e.value;
    i.title = e.label;
    // console.log(e);
    pushToParent(ingr);
  };
  // console.log(ingr);
  const onMeasureChange = (i, e) => {
    i.measure = e.target.value;
    pushToParent(ingr);
  };

  const addIngr = c => {
    let newIngr;
    if (ingr.length > c) {
      newIngr = [...ingr];
      newIngr.pop();
    } else {
      newIngr = [
        ...ingr,
        { id: UUID.generate(), title: '', ingredientId: '', measure: '' },
      ];
    }
    setIngr(newIngr);
    pushToParent(newIngr);
  };

  const removeIngr = idx => {
    ingr.splice(idx, 1);
    setIngr([...ingr]);
    pushToParent(ingr);
  };

  const pushToParent = ingr => {
    setFieldValue(
      'ingredients',
      ingr.map(i => ({
        ingredientId: i.ingredientId,
        title: i.title,
        measure: i.measure,
      }))
    );
  };

  return (
    <DrinkIngredientsWrapper>
      <TitleWrapper>
        <Subtitle title="Ingredients" />
        <QuantitySwitch value={ingr.length} setValue={addIngr} />
      </TitleWrapper>
      <IngredientWrapper>
        {ingr.map((i, idx) => {
          return (
            <IngredientInputsWrapper key={i.id}>
              <DrinkIngredientCustomSelect
                placeholder="Ingredient"
                options={ingredients}
                name="ingredientId"
                onChange={e => onIngredientChange(i, e)}
                value={i}
              />
              <MeasureInput
                type="text"
                placeholder="0"
                value={i.measure}
                onChange={e => onMeasureChange(i, e)}
              />
              <CloseIconReactSvg
                src={closeIcon}
                onClick={() => removeIngr(idx)}
              />
            </IngredientInputsWrapper>
          );
        })}
      </IngredientWrapper>
    </DrinkIngredientsWrapper>
  );
}
