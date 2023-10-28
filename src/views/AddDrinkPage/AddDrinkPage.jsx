import PageTitle from 'components/PageTitle/PageTitle';
import {
  AddBtn,
  AddBtnText,
  AddDrinkContainer,
  AddFormInput,
  AddFormRadioGroup,
  AddFormSelect,
  AddFormSelectContainer,
  AddFormSelectLabel,
  AddFormTextarea,
  AddIngedientSelect,
  AddPhotoContainer,
  ChevronReactSvg,
  CloseIconReactSvg,
  InputRadio,
  QuantityBtn,
  QuantityBtnMirror,
  QuantityContainer,
  QuantityIconReactSvg,
  QuantityIngredients,
  QuantityText,
  ReactSVGIcon,
  SelectContainer,
  SubTitle,
} from './AddDrinkPage.styled';
import { MainContainer } from 'styles/App.styled';
import IconPlus from '../../assets/images/addDrink/plus.svg';
import ingredients from '../../helpers/Data/ingredients.json';
import glasses from 'helpers/Data/glasses';
import chevronDown from '../../assets/images/addDrink/chevron-down.svg';

import { useEffect, useState } from 'react';
import WhiteLinkBtn from 'components/LinkBtn/WhiteLinkBtn/WhiteLinkBtn';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth/authOperations';
// import chevronUp from '../../assets/images/addDrink/chevron-up.svg';
// import { ReactSVG } from 'react-svg';
import minuIcon from '../../assets/images/addDrink/MinusForm.svg';
import plusIcon from '../../assets/images/addDrink/PlusForm.svg';
import closeIcon from '../../assets/images/addDrink/X.svg';

export default function AddDrinkPage() {
  const [value, setValue] = useState('Alcogolic');
  const [quantityValue, setQuantityValue] = useState(1);
  const changeValue = e => {
    setValue(e.currentTarget.value);
  };

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
  // const dispatch = useDispatch();
  // useEffect(() => {
  // dispatch(authOperations.refreshUser());
  // }, [dispatch]);

  useEffect(() => {}, []);
  return (
    <MainContainer>
      <AddDrinkContainer>
        <PageTitle title="Add drink" />
        <AddPhotoContainer>
          <AddBtn>
            <ReactSVGIcon src={IconPlus} />
          </AddBtn>
          <AddBtnText>Add image</AddBtnText>
        </AddPhotoContainer>
        <form onSubmit={onFormSubmit} style={{ marginBottom: '80px' }}>
          <SelectContainer>
            <AddFormInput
              type="text"
              data-limit="50"
              placeholder="Enter item title"
            />
            <AddFormInput type="text" placeholder="Enter about recipe" />
            <AddFormSelectContainer>
              <AddFormSelectLabel>
                Category <ChevronReactSvg src={chevronDown} />
              </AddFormSelectLabel>
              <AddFormSelect
                placeholder=""
                getOptionLabel={ingredient => ingredient.title}
                getOptionValue={ingredient => ingredient.title}
                options={ingredients}
                styles={{
                  control: base => ({
                    base,
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    borderBottom: '1px solid var(--white-fifty-color)',
                    '&:hover': {
                      borderBottom: '1px solid var(--white-color)',
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
              />
            </AddFormSelectContainer>

            <AddFormSelectContainer>
              <AddFormSelectLabel>
                Glass <ChevronReactSvg src={chevronDown} />
              </AddFormSelectLabel>
              <AddFormSelect
                className="react-select"
                classNamePrefix="react-select"
                placeholder=""
                name="glassSelect"
                getOptionLabel={glass => glass.glass}
                getOptionValue={glass => glass.glass}
                options={glasses}
                styles={{
                  control: base => ({
                    base,
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    borderBottom: '1px solid var(--white-fifty-color)',
                    '&:hover': {
                      borderBottom: '1px solid var(--white-color)',
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
              />
            </AddFormSelectContainer>
            <AddFormRadioGroup>
              <InputRadio
                type="radio"
                id="typeAlco"
                name="typeDrink"
                value="Alcoholic"
                checked={value === 'Alcoholic' ? true : false}
                onChange={e => changeValue(e)}
              />
              <label
                htmlFor="typeAlco"
                id="typeAlcoLabel"
                style={{
                  color:
                    value === 'Alcoholic'
                      ? '#F3F3F3'
                      : 'rgba(243, 243, 243, 0.5)',
                }}
              >
                Alcoholic
              </label>
              <InputRadio
                type="radio"
                id="typeNonAlco"
                name="typeDrink"
                value="Non-alcogolic"
                checked={value === 'Non-alcogolic' ? true : false}
                onChange={e => changeValue(e)}
              />
              <label
                htmlFor="typeNonAlco"
                id="typeNonAlcoLabel"
                style={{
                  color:
                    value === 'Non-alcogolic'
                      ? '#F3F3F3'
                      : 'rgba(243, 243, 243, 0.5)',
                }}
              >
                Non-alcoholic
              </label>
            </AddFormRadioGroup>
          </SelectContainer>
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
                <ChevronReactSvg src={chevronDown} />

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
          <WhiteLinkBtn type="submit" title="Add" navLink={'/my'} />
        </form>
        <div>
          <h4>Follow Us</h4>
          <div>Іконки</div>
        </div>
        <div>
          <h4>Popular drinks</h4>
          <div>Компонент Популярні напої</div>
        </div>
      </AddDrinkContainer>
    </MainContainer>
  );
}
