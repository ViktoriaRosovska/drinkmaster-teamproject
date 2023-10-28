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
  AddPhotoContainer,
  ChevronReactSvg,
  InputRadio,
  ReactSVGIcon,
  SelectContainer,
} from './AddDrinkPage.styled';
import { MainContainer } from 'styles/App.styled';
import IconPlus from '../../assets/images/addDrink/plus.svg';
import ingredients from '../../helpers/Data/ingredients.json';
import glasses from 'helpers/Data/glasses';
import chevronDown from '../../assets/images/addDrink/chevron-down.svg';

import { useState } from 'react';

// import chevronUp from '../../assets/images/addDrink/chevron-up.svg';
// import { ReactSVG } from 'react-svg';

export default function AddDrinkPage() {
  const [value, setValue] = useState('Alcogolic');
  const changeValue = e => {
    setValue(e.currentTarget.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.elements.glassSelect.value);
    console.log(e.currentTarget.elements.typeDrink.value);
  };
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
        <form onClick={onFormSubmit}>
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
                placeholder=""
                name="glassSelect"
                getOptionLabel={glass => glass.glass}
                getOptionValue={glass => glass.glass}
                options={glasses}
                styles={{
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

          <h3>Ingredients</h3>
          <div>
            <button>+</button>
            <span>3</span>
            <button>-</button>
          </div>
          <select>
            <optgroup>
              <option>Lem</option>
            </optgroup>
          </select>
          <input type="text" />
          <button>X</button>
          <h3>Recipe Preparation</h3>
          <AddFormTextarea placeholder="Enter the recipe"></AddFormTextarea>
          <button type="submit">Add</button>
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
