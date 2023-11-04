import {
  CloseIconReactSvg,
  DrinkIngredientsWrapper,
  IngredientInputsWrapper,
  IngredientWrapper,
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
    { id: UUID.generate(), ingredientId: '', measure: '0' },
  ]);
  // const [ingredientId, setIngredientId] = useState('');
  // const [measure, setMeasure] = useState('');
  const onIngredientChange = (i, e) => {
    i.ingredientId = e.value;
    pushToParent(ingr);
    // const value = e.value;
    // console.log(value);
    // setIngredientId(value);
    // setFieldValue('ingredientId', value);
  };

  const onMeasureChange = (i, e) => {
    i.measure = e.target.value;
    pushToParent(ingr);
    // const value = e.target.value;
    // console.log(value);
    // setMeasure(value);
    // setFieldValue('measure', value);
  };

  const addIngr = c => {
    let newIngr;
    if (ingr.length > c) {
      newIngr = [...ingr];
      newIngr.pop();
    } else {
      newIngr = [
        ...ingr,
        { id: UUID.generate(), ingredientId: '', measure: '0' },
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
      ingr.map(i => ({ ingredientId: i.ingredientId, measure: i.measure }))
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
                value={i.ingredientId}
              />
              <input
                type="text"
                style={{
                  width: '101px',
                  height: '50px',
                  borderRadius: '200px',
                  border: '1px solid var(--white-fifty-color)',
                  backgroundColor: 'transparent',
                  color: 'white',
                }}
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
