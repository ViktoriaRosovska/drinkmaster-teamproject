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
export default function DrinkIngridientsFields() {
  const [ingr, setIngr] = useState([{ id: UUID.generate() }]);

  const addIngr = c => {
    if (ingr.length > c) {
      ingr.pop();
      setIngr([...ingr]);
    } else setIngr([...ingr, { id: UUID.generate() }]);
  };

  const removeIngr = idx => {
    ingr.splice(idx, 1);
    setIngr([...ingr]);
  };

  // found: object with keys {
  //   _id, title, ingredientThumb, thumb - medium,
  //   thumb - small, abv, alcohol, description, type, flavour, country
  // };
  return (
    <DrinkIngredientsWrapper>
      <TitleWrapper>
        <Subtitle title="Ingredients" />
        <QuantitySwitch value={ingr.length} setValue={addIngr} />
      </TitleWrapper>
      <IngredientWrapper>
        {ingr.map((i, idx) => {
          return (
            <IngredientInputsWrapper key={UUID.generate()}>
              <DrinkIngredientCustomSelect
                placeholder="Ingredient"
                options={ingredients}
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
                value={i.amount}
                onChange={e => (i.amount = e.target.value)}
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
