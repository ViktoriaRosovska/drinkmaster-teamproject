import minuIcon from '../../../assets/images/addDrink/MinusForm.svg';
import plusIcon from '../../../assets/images/addDrink/PlusForm.svg';
import closeIcon from '../../../assets/images/addDrink/X.svg';
import {
  AddFormSelect,
  AddFormSelectContainer,
  AddFormTextarea,
  AddIngedientSelect,
  // ChevronReactSvg,
  CloseIconReactSvg,
  QuantityBtn,
  QuantityBtnMirror,
  QuantityContainer,
  QuantityIconReactSvg,
  QuantityIngredients,
  QuantityText,
  SubTitle,
} from './AddDrinkForm.styled';
import WhiteLinkBtn from '../../Buttons/WhiteLinkBtn/WhiteLinkBtn';

import ingredients from '../../../helpers/Data/ingredients.json';

import { DrinkDescriptionFields } from '../../DrinkDescriptionFields/DrinkDescriptionFields';
import { useState } from 'react';
// import chevronUp from '../../assets/images/addDrink/chevron-up.svg';
// import { ReactSVG } from 'react-svg';

export default function AddDrinkForm() {
  const [quantityValue, setQuantityValue] = useState(1);
  // const changeValue = e => {
  // setValue(e.currentTarget.value);

  const onFormSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.elements.glassSelect.value);
    console.log(e.currentTarget.elements.typeDrink.value);
  };

  const onMinusQuantityHandler = () => {
    if (quantityValue > 1) {
      setQuantityValue(quantityValue - 1);
    } else {
      setQuantityValue(1);
    }
  };
  const onPlusQuantityHandler = () => {
    if (quantityValue < 20) {
      setQuantityValue(quantityValue + 1);
    } else {
      setQuantityValue(quantityValue);
    }
  };

  return (
    <>
      <form onSubmit={onFormSubmit} style={{ marginBottom: '80px' }}>
        <DrinkDescriptionFields />

        <>
          <QuantityContainer>
            <SubTitle>Ingredients</SubTitle>
            <QuantityIngredients>
              <QuantityBtn onClick={onMinusQuantityHandler}>
                <QuantityIconReactSvg src={minuIcon} />
              </QuantityBtn>
              <QuantityText>{quantityValue}</QuantityText>
              <QuantityBtnMirror onClick={onPlusQuantityHandler}>
                <QuantityIconReactSvg src={plusIcon} />
              </QuantityBtnMirror>
            </QuantityIngredients>
          </QuantityContainer>
          <AddIngedientSelect
            styles={{
              control: base => ({
                base,
                backgroundColor: 'transparent',
                boxShadow: 'none',
                border: '1px solid var(--white-fifty-color)',
                '&:hover': {
                  border: '1px solid var(--white-color)',
                },
              }),
              option: (provided, state) => ({
                ...provided,

                backgroundColor: 'none',
                '&:hover': {
                  color: 'var(--white-color)',
                },
              }),
            }}
          >
            <AddFormSelectContainer>
              {/* <ChevronReactSvg src={chevronDown} /> */}

              <AddFormSelect
                placeholder="Ingredient"
                getOptionLabel={ingredient => ingredient.title}
                getOptionValue={ingredient => ingredient.title}
                options={ingredients}
                styles={{
                  control: base => ({
                    base,
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    border: '1px solid var(--white-fifty-color)',
                    borderRadius: '200px',
                    width: '200px',
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
            </AddFormSelectContainer>
            <input
              type="text"
              style={{
                width: '101px',
                height: '50px',
                borderRadius: '200px',
                border: '1px solid var(--white-fifty-color)',
                backgroundColor: 'transparent',
              }}
            />
            <CloseIconReactSvg src={closeIcon} />
          </AddIngedientSelect>
        </>

        <SubTitle>Recipe Preparation</SubTitle>
        <label htmlFor="addDrinkFormTextarea">Enter the recipe</label>
        <AddFormTextarea id="addDrinkFormTextarea"></AddFormTextarea>
        <WhiteLinkBtn type="submit" title="Add" />
      </form>
    </>
  );
}
