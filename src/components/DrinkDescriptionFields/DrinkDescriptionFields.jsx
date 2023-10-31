import {
  AddBtn,
  AddBtnText,
  AddFormInput,
  AddFormRadioGroup,
  AddPhotoContainer,
  InputRadio,
  ReactSVGIcon,
  SelectContainer,
} from './DrinkDescriptionFields.styled';
import IconPlus from '../../assets/images/addDrink/plus.svg';
// import chevronDown from '../../../assets/images/addDrink/chevron-down.svg';
// import glasses from '../../../helpers/Data/glasses';
// import { useState } from 'react';
export const DrinkDescriptionFields = () => {
  // const [value, setValue] = useState('Alcogolic');

  return (
    <>
      <AddPhotoContainer>
        <AddBtn>
          <ReactSVGIcon src={IconPlus} />
        </AddBtn>
        <AddBtnText>Add image</AddBtnText>
      </AddPhotoContainer>
      <SelectContainer>
        <AddFormInput
          type="text"
          data-limit="50"
          placeholder="Enter item title"
        />
        <AddFormInput type="text" placeholder="Enter about recipe" />
        {/* <AddFormSelectContainer>
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
        </AddFormSelectContainer> */}
        <AddFormRadioGroup>
          <InputRadio
            type="radio"
            id="typeAlco"
            name="typeDrink"
            value="Alcoholic"
            // checked={value === 'Alcoholic' ? true : false}
            // onChange={e => changeValue(e)}
          />
          <label
            htmlFor="typeAlco"
            id="typeAlcoLabel"
            // style={{
            //   color:
            //     value === 'Alcoholic' ? '#F3F3F3' : 'rgba(243, 243, 243, 0.5)',
            // }}
          >
            Alcoholic
          </label>
          <InputRadio
            type="radio"
            id="typeNonAlco"
            name="typeDrink"
            value="Non-alcogolic"
            // checked={value === 'Non-alcogolic' ? true : false}
            // onChange={e => changeValue(e)}
          />
          <label
            htmlFor="typeNonAlco"
            id="typeNonAlcoLabel"
            // style={{
            //   color:
            //     value === 'Non-alcogolic'
            //       ? '#F3F3F3'
            //       : 'rgba(243, 243, 243, 0.5)',
            // }}
          >
            Non-alcoholic
          </label>
        </AddFormRadioGroup>
      </SelectContainer>
    </>
  );
};
