import {
  CloseIconReactSvg,
  DrinkIngredientsWrapper,
  IngredientInputsWrapper,
  IngredientWrapper,
  TitleWrapper,
} from './DrinkIngredientsFields.styled';
import closeIcon from '../../assets/images/addDrink/X.svg';
// import { AddIngedientSelect } from 'components/Forms/AddDrinkForm/AddDrinkForm.styled';
import { AddFormSelect } from 'components/DrinkDescriptionFields/DrinkDescriptionFields.styled';
import Subtitle from 'components/Typography/Subtitle/Subtitle';
import QuantitySwitch from './QuantitySwitch/QuantitySwitch';
import { useState } from 'react';
import { UUID } from 'uuidjs';

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

  const children = ingr.map((i, idx) => (
    <>
      <IngredientInputsWrapper key={i.id}>
        <AddFormSelect
          placeholder="Ingredient"
          getOptionLabel={ingredient => ingredient.title}
          getOptionValue={ingredient => ingredient.title}
          // options={ingredients}
          styles={{
            control: base => ({
              base,
              backgroundColor: 'transparent',
              boxShadow: 'none',
              border: '1px solid var(--white-fifty-color)',
              borderRadius: '200px',
              color: 'white',

              height: '50px',
              '&:hover': {
                border: '1px solid var(--white-color)',
              },
            }),
            option: (provided, state) => ({
              ...provided,

              backgroundColor: 'none',
              '&:hover': {
                color: 'var(--white-fifty-color)',
              },
            }),
          }}
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
        <CloseIconReactSvg src={closeIcon} onClick={() => removeIngr(idx)} />
      </IngredientInputsWrapper>
    </>
  ));

  return (
    <DrinkIngredientsWrapper>
      <TitleWrapper>
        <Subtitle title="Ingredients" />
        <QuantitySwitch value={ingr.length} setValue={addIngr} />
      </TitleWrapper>
      <IngredientWrapper>{children}</IngredientWrapper>
    </DrinkIngredientsWrapper>
  );
}
