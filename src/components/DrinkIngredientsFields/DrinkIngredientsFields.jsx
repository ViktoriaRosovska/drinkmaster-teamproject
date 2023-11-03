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
            <>
              <IngredientInputsWrapper key={ingredients._id}>
                {/* <AddFormSelect
                  placeholder="Ingredient"
                  getOptionLabel={ingredient => ingredient.title}
                  getOptionValue={ingredient => ingredient.title}
                  options={ingredients}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      boxShadow: state.isFocused ? 0 : 0,
                      borderColor: state.isFocused
                        ? 'var(--white-color)'
                        : 'var(--white-fifty-color)',
                      backgroundColor: 'transparent',
                      justifyContent: 'flex-end',
                      borderRadius: '200px',
                      height: '50px',
                      position: 'relative',
                      color: 'red',
                      '&:hover': {
                        borderColor: 'var(--white-color)',
                      },
                    }),
                    singleValue: baseStyles => ({
                      ...baseStyles,
                      color: 'white',
                      textAlign: 'right',
                    }),

                    valueContainer: baseStyles => ({
                      ...baseStyles,

                      justifyContent: 'flex-start',
                      alignItems: 'center',

                      color: 'var(--white-color)',
                    }),
                    indicatorsContainer: baseStyles => ({
                      ...baseStyles,

                      color: 'green',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      justifyContent: 'flex-end',
                      alignContent: 'center',
                    }),
                    menu: baseStyles => ({
                      ...baseStyles,
                      borderRadius: '12px',
                      backgroundColor: '#161F37',
                      width: '131px',
                      top: '16px',
                      right: '0',

                      '&::-webkit-scrollbar': {
                        width: '0px',
                      },
                    }),
                    menuList: baseStyles => ({
                      ...baseStyles,

                      '&::-webkit-scrollbar': {
                        width: '0px',
                      },
                    }),
                    option: base => ({
                      ...base,
                      boxShadow: 'none',
                      width: '100%',
                      backgroundColor: 'transparent',
                      '&:hover': {
                        color: 'var(--white-color)',
                      },
                    }),

                    indicatorSeparator: base => ({
                      ...base,
                      display: 'none',
                    }),
                    dropdownIndicator: (baseStyles, { isFocused }) => ({
                      ...baseStyles,
                      color: 'var(--white-color)',
                      padding: '0',
                      '&:hover': {
                        color: 'var(--white-color)',
                      },
                      transition: 'transform 0.25s ease-out',
                      transform: isFocused && 'rotate(180deg)',
                    }),
                  }}
                /> */}
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
            </>
          );
        })}
      </IngredientWrapper>
    </DrinkIngredientsWrapper>
  );
}
