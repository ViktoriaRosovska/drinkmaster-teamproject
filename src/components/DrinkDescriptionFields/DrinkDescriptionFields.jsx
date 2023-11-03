import {
  AddFormInput,
  AddFormRadioGroup,
  // AddFormSelect,
  AddFormSelectContainer,
  AddFormSelectLabel,
  AddPhotoContainer,
  DescriptionWrapper,
  FileImage,
  InputAddFile,
  InputFileWrapper,
  InputRadio,
  InputText,
  ReactSVGIcon,
  SelectContainer,
} from './DrinkDescriptionFields.styled';
import IconPlus from '../../assets/images/addDrink/plus.svg';
import { useState } from 'react';
import DrinkFormCustomSelect from './DrinkFormCustomSelect/DrinkFormCustomSelect';

export const DrinkDescriptionFields = () => {
  const [file, setFile] = useState();
  const [value, setValue] = useState('Non-alcoholic');

  const handleChange = e => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const changeValue = e => {
    if (e.target.value === 'Alcoholic') {
      setValue('Alcoholic');
    }
    if (e.target.value === 'Non-alcoholic') {
      setValue('Non-alcoholic');
    }
  };
  const glasses = [
    'Highball glass',
    'Cocktail glass',
    'Old-fashioned glass',
    'Whiskey Glass',
    'Collins glass',
    'Pousse cafe glass',
    'Champagne flute',
    'Whiskey sour glass',
    'Cordial glass',
    'Brandy snifter',
    'White wine glass',
    'Nick and Nora Glass',
    'Hurricane glass',
    'Coffee mug',
    'Shot glass',
    'Jar',
    'Irish coffee cup',
    'Punch bowl',
    'Pitcher',
    'Pint glass',
    'Copper Mug',
    'Wine Glass',
    'Beer mug',
    'Margarita/Coupette glass',
    'Beer pilsner',
    'Beer Glass',
    'Parfait glass',
    'Mason jar',
    'Margarita glass',
    'Martini Glass',
    'Balloon Glass',
    'Coupe Glass',
  ];
  const categories = [
    'Ordinary Drink',
    'Cocktail',
    'Shake',
    'Other/Unknown',
    'Cocoa',
    'Shot',
    'Coffee/Tea',
    'Homemade Liqueur',
    'Punch/Party Drink',
    'Beer',
    'Soft Drink',
  ];

  return (
    <>
      <DescriptionWrapper>
        <AddPhotoContainer>
          {file && <FileImage src={file ? file : null} alt="Add drink" />}
          <InputFileWrapper>
            <label>
              <InputAddFile type="file" onChange={handleChange} />
              <ReactSVGIcon src={IconPlus} />
            </label>
          </InputFileWrapper>
          <InputText>Add drink</InputText>
        </AddPhotoContainer>

        <SelectContainer>
          <AddFormInput
            type="text"
            data-limit="40"
            placeholder="Enter item title"
          />
          <AddFormInput type="text" placeholder="Enter about recipe" />
          <AddFormSelectContainer>
            <AddFormSelectLabel>Category</AddFormSelectLabel>
            {/* <AddFormSelect
              placeholder=""
              getOptionLabel={ingredient => ingredient.title}
              getOptionValue={ingredient => ingredient.title}
              options={ingredients}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  boxShadow: '0 !important',
                  borderColor: state.isFocused
                    ? 'var(--white-color)'
                    : 'var(--white-fifty-color)',

                  backgroundColor: 'transparent',
                  justifyContent: 'flex-end',
                  border: 'none',
                  height: '34px',
                  position: 'relative',
                  color: 'red',
                  borderBottom: state.isFocused
                    ? '1px solid var(--white-color)'
                    : '1px solid var(--white-fifty-color)',
                  borderRadius: '0',
                  '&:hover': {
                    borderColor: 'var(--white-color)',
                  },
                }),
                singleValue: baseStyles => ({
                  ...baseStyles,
                  color: 'white',
                  textAlign: 'right',
                }),
                input: baseStyles => ({
                  width: '300px',
                }),
                valueContainer: baseStyles => ({
                  ...baseStyles,
                  width: '131px',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  marginRight: '18px',
                  color: 'var(--white-color)',
                  marginBottom: '14px',
                }),
                indicatorsContainer: baseStyles => ({
                  ...baseStyles,
                  color: 'green',
                  width: '100%',
                  justifyContent: 'flex-end',
                  position: 'absolute',
                  top: '0',
                  padding: '0',
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
            <DrinkFormCustomSelect placeholder="" options={categories} />
          </AddFormSelectContainer>

          <AddFormSelectContainer>
            <AddFormSelectLabel>Glass</AddFormSelectLabel>
            {/* <AddFormSelect
              className="react-select"
              classNamePrefix="react-select"
              placeholder=""
              name="glassSelect"
              getOptionLabel={glass => glass.glass}
              getOptionValue={glass => glass.glass}
              options={glasses}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  boxShadow: 'none',
                  backgroundColor: 'transparent',
                  justifyContent: 'flex-end',
                  border: 'none',
                  height: '34px',
                  position: 'relative',
                  color: 'red',
                  borderBottom: state.isFocused
                    ? '1px solid var(--white-color)'
                    : '1px solid var(--white-fifty-color)',
                  borderRadius: '0',
                  '&:hover': {
                    borderColor: 'var(--white-color)',
                  },
                }),
                singleValue: baseStyles => ({
                  ...baseStyles,
                  color: 'white',
                  textAlign: 'right',
                }),
                input: baseStyles => ({
                  width: '300px',
                }),
                valueContainer: baseStyles => ({
                  ...baseStyles,
                  width: '131px',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  marginRight: '18px',
                  color: 'var(--white-color)',
                  marginBottom: '14px',
                }),
                indicatorsContainer: baseStyles => ({
                  ...baseStyles,
                  color: 'green',
                  width: '100%',
                  justifyContent: 'flex-end',
                  position: 'absolute',
                  top: '0',
                  padding: '0',
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
            <DrinkFormCustomSelect placeholder="" options={glasses} />
          </AddFormSelectContainer>
          <AddFormRadioGroup>
            <InputRadio
              type="radio"
              id="typeAlco"
              name="typeDrink"
              value="Alcoholic"
              placeholder="Ingredient"
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
              value="Non-alcoholic"
              checked={value === 'Non-alcoholic' ? true : false}
              onChange={e => changeValue(e)}
            />
            <label
              htmlFor="typeNonAlco"
              id="typeNonAlcoLabel"
              style={{
                color:
                  value === 'Non-alcoholic'
                    ? '#F3F3F3'
                    : 'rgba(243, 243, 243, 0.5)',
              }}
            >
              Non-alcoholic
            </label>
          </AddFormRadioGroup>
        </SelectContainer>
      </DescriptionWrapper>
    </>
  );
};
