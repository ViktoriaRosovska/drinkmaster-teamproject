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

export const DrinkDescriptionFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const [value, setValue] = useState('Non-alcoholic');
  const [selectedFileImage, setSelectedFileImage] = useState(null);

  const [drink, setDrink] = useState('');

  console.log(selectedFileImage);

  const handleFileChange = e => {
    const file = e.target.files[0];
    setFieldValue('drinkThumb', URL.createObjectURL(file));
    if (file) {
      setSelectedFileImage(URL.createObjectURL(file));
    } else {
      setSelectedFileImage(null);
    }
  };
  const handleTitleChange = e => {
    const { value } = e.target;
    setFieldValue('drink', value);
    setDrink(value);
  };

  console.log(drink);

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
          {selectedFileImage && (
            <FileImage src={selectedFileImage} alt="Selected image" />
          )}
          <InputFileWrapper>
            <label>
              <InputAddFile
                type="file"
                onChange={e => handleFileChange(e)}
                id="drinkThumb"
                name="drinkThumb"
                accept="drinkThumb/*"
              />
              <ReactSVGIcon src={IconPlus} />
            </label>
          </InputFileWrapper>
          <InputText>Add drink</InputText>
          {touched.drinkThumb && errors.drinkThumb ? (
            <div>{errors.drinkThumb}</div>
          ) : null}
        </AddPhotoContainer>

        <SelectContainer>
          <AddFormInput
            name="drink"
            id="drink"
            type="text"
            data-limit="40"
            placeholder="Enter item title"
            onChange={e => handleTitleChange(e)}
            // onBlur={(e)=>{setIsFocused(false)}}
            value={values.drink}
          />
          {touched.drink && errors.drink ? <div>{errors.drink}</div> : null}
          <AddFormInput type="text" placeholder="Enter about recipe" />
          <AddFormSelectContainer>
            <AddFormSelectLabel>Category</AddFormSelectLabel>

            <DrinkFormCustomSelect placeholder="" options={categories} />
          </AddFormSelectContainer>

          <AddFormSelectContainer>
            <AddFormSelectLabel>Glass</AddFormSelectLabel>

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
