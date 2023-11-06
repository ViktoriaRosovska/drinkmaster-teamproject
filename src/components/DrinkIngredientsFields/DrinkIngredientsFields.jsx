import {
  CloseIconReactSvg,
  DrinkIngredientsWrapper,
  IngredientInputsWrapper,
  IngredientWrapper,
  IngredientiMeasureWrapper,
  MeasureInput,
  RelativeIngredientWrapper,
  TitleWrapper,
} from './DrinkIngredientsFields.styled';
import closeIcon from '../../assets/images/addDrink/X.svg';

import Subtitle from 'components/Typography/Subtitle/Subtitle';
import QuantitySwitch from './QuantitySwitch/QuantitySwitch';
import { useState } from 'react';
import { UUID } from 'uuidjs';
import ingredients from '../../helpers/Data/ingredients.json';
import DrinkIngredientCustomSelect from './DrinkIngredientCustomSelect/DrinkIngredientCustomSelect';
import { ShowError } from 'components/ShowError/ShowError';

export default function DrinkIngridientsFields({
  values,
  errors,
  touched,
  setFieldValue,
}) {
  const [ingredientCollection, setIngr] = useState([
    { id: UUID.generate(), ingredientId: '', measure: '' },
  ]);
  const [hasIngredient, setHasIngredient] = useState(false);
  const [hasMeasure, setHasMeasure] = useState(false);

  const onIngredientChange = (i, e) => {
    i.ingredientId = e.value;
    i.title = e.label;
    setHasIngredient(true);
    pushToParent(ingredientCollection);
  };

  const onMeasureChange = (i, e) => {
    i.measure = e.target.value;
    setHasMeasure(true);
    pushToParent(ingredientCollection);
  };

  const addIngredient = c => {
    let newIngredientCollection;
    if (ingredientCollection.length > c) {
      newIngredientCollection = [...ingredientCollection];
      newIngredientCollection.pop();
    } else {
      newIngredientCollection = [
        ...ingredientCollection,
        { id: UUID.generate(), title: '', ingredientId: '', measure: '' },
      ];
    }
    setIngr(newIngredientCollection);
    pushToParent(newIngredientCollection);
  };

  const removeIngredient = idx => {
    if (ingredientCollection.length === 1) {
      return;
    }
    ingredientCollection.splice(idx, 1);
    setIngr([...ingredientCollection]);
    pushToParent(ingredientCollection);
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
        <QuantitySwitch
          value={ingredientCollection.length}
          setValue={addIngredient}
        />
      </TitleWrapper>
      <IngredientWrapper>
        {ingredientCollection.map((i, idx) => {
          return (
            <IngredientInputsWrapper key={i.id}>
              <IngredientiMeasureWrapper>
                <RelativeIngredientWrapper>
                  <DrinkIngredientCustomSelect
                    placeholder="Ingredient"
                    options={ingredients}
                    name="ingredientId"
                    onChange={e => onIngredientChange(i, e)}
                    value={i}
                    error={
                      errors.ingredientId && touched.ingredientId
                        ? 'true'
                        : 'false'
                    }
                    success={
                      values.ingredientId && !errors.ingredientId
                        ? 'true'
                        : 'false'
                    }
                  />

                  {hasIngredient ? null : (
                    <ShowError message={errors.category} />
                  )}
                </RelativeIngredientWrapper>

                <RelativeIngredientWrapper>
                  <MeasureInput
                    type="text"
                    placeholder="0"
                    value={i.measure}
                    onChange={e => onMeasureChange(i, e)}
                    error={errors.measure && touched.measure ? 'true' : 'false'}
                    success={
                      values.measure && !errors.measure ? 'true' : 'false'
                    }
                  />

                  {hasMeasure ? null : <ShowError message={errors.category} />}
                </RelativeIngredientWrapper>
              </IngredientiMeasureWrapper>
              <CloseIconReactSvg
                src={closeIcon}
                onClick={() => removeIngredient(idx)}
              />
            </IngredientInputsWrapper>
          );
        })}
      </IngredientWrapper>
    </DrinkIngredientsWrapper>
  );
}
