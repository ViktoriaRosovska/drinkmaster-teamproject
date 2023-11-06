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
import { useEffect, useState } from 'react';
import DrinkFormCustomSelect from './DrinkFormCustomSelect/DrinkFormCustomSelect';

import { useDispatch, useSelector } from 'react-redux';

import { selectCategories, selectGlasses } from 'redux/filters/filtersSelector';
import {
  getCategories,
  getGlasses,
  getIngredients,
} from 'redux/filters/filtersOperations';

export const DrinkDescriptionFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const categories = useSelector(selectCategories);
  const glasses = useSelector(selectGlasses);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getGlasses());
    dispatch(getIngredients());
  }, [dispatch]);

  const [radioAlco, setRadioAlco] = useState('Non-alcoholic');
  const [selectedFileImage, setSelectedFileImage] = useState(null);
  const [description, setDescription] = useState('');

  const [drink, setDrink] = useState('');

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
    console.log(value);
    setFieldValue('drink', value);
    setDrink(value);
  };

  const handleDescriptionChange = e => {
    console.log(e.target.value);
    const { value } = e.target;
    setFieldValue('description', value);
    setDescription(value);
  };
  // console.log(drink);

  const [glassSelect, setGlassSelect] = useState('Cocktail glass');
  const [categorySelect, setCategorySelect] = useState('Coctail');

  const handleCategorySelectChange = e => {
    const value = e.value;
    setCategorySelect(value);
    setFieldValue('category', value);
    console.log('category', value);
  };

  const handleGlassSelectChange = e => {
    const value = e.value;
    setGlassSelect(value);
    setFieldValue('glass', value);
    console.log('select', value);
  };
  // console.log('glass', glassSelect);

  const changeRadioAlco = e => {
    const { value } = e.target;
    if (value === 'Alcoholic') {
      setRadioAlco('Alcoholic');
    }
    if (value === 'Non-alcoholic') {
      setRadioAlco('Non-alcoholic');
    }
    setFieldValue('alcoholic', value);
  };
  console.log(radioAlco);
  // const glasses = [
  //   'Highball glass',
  //   'Cocktail glass',
  //   'Old-fashioned glass',
  //   'Whiskey Glass',
  //   'Collins glass',
  //   'Pousse cafe glass',
  //   'Champagne flute',
  //   'Whiskey sour glass',
  //   'Cordial glass',
  //   'Brandy snifter',
  //   'White wine glass',
  //   'Nick and Nora Glass',
  //   'Hurricane glass',
  //   'Coffee mug',
  //   'Shot glass',
  //   'Jar',
  //   'Irish coffee cup',
  //   'Punch bowl',
  //   'Pitcher',
  //   'Pint glass',
  //   'Copper Mug',
  //   'Wine Glass',
  //   'Beer mug',
  //   'Margarita/Coupette glass',
  //   'Beer pilsner',
  //   'Beer Glass',
  //   'Parfait glass',
  //   'Mason jar',
  //   'Margarita glass',
  //   'Martini Glass',
  //   'Balloon Glass',
  //   'Coupe Glass',
  // ];
  // const categories = [
  //   'Ordinary Drink',
  //   'Cocktail',
  //   'Shake',
  //   'Other/Unknown',
  //   'Cocoa',
  //   'Shot',
  //   'Coffee/Tea',
  //   'Homemade Liqueur',
  //   'Punch/Party Drink',
  //   'Beer',
  //   'Soft Drink',
  // ];

  return (
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
          value={drink}
          style={{
            borderBottom: errors.drink && '1px solid red',
          }}
        />
        {touched.drink && errors.drink ? <div>{errors.drink}</div> : null}
        <AddFormInput
          type="text"
          id="description"
          placeholder="Enter about recipe"
          name="description"
          onChange={e => handleDescriptionChange(e)}
          value={description}
          style={{
            borderBottom: errors.description && '1px solid red',
          }}
        />
        {touched.description && errors.description ? (
          <div>{errors.description}</div>
        ) : null}
        <AddFormSelectContainer>
          <AddFormSelectLabel>Category</AddFormSelectLabel>

          <DrinkFormCustomSelect
            placeholder=""
            options={categories}
            value={categorySelect}
            name="category"
            onChange={handleCategorySelectChange}
          />
        </AddFormSelectContainer>
        {/* {touched.category && errors.category ? (
          <div>{errors.category}</div>
        ) : null} */}
        <AddFormSelectContainer>
          <AddFormSelectLabel>Glass</AddFormSelectLabel>

          <DrinkFormCustomSelect
            placeholder=""
            options={glasses}
            value={glassSelect}
            name="glass"
            onChange={handleGlassSelectChange}
          />
          {/* {touched.glass && errors.glass ? <div>{errors.glass}</div> : null} */}
        </AddFormSelectContainer>
        <AddFormRadioGroup>
          <InputRadio
            type="radio"
            id="typeAlco"
            name="typeDrink"
            value="Alcoholic"
            placeholder="Ingredient"
            checked={radioAlco === 'Alcoholic' ? true : false}
            onChange={e => changeRadioAlco(e)}
          />
          <label
            htmlFor="typeAlco"
            id="typeAlcoLabel"
            style={{
              color:
                radioAlco === 'Alcoholic'
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
            checked={radioAlco === 'Non-alcoholic' ? true : false}
            onChange={e => changeRadioAlco(e)}
          />
          <label
            htmlFor="typeNonAlco"
            id="typeNonAlcoLabel"
            style={{
              color:
                radioAlco === 'Non-alcoholic'
                  ? '#F3F3F3'
                  : 'rgba(243, 243, 243, 0.5)',
            }}
          >
            Non-alcoholic
          </label>
        </AddFormRadioGroup>
      </SelectContainer>
    </DescriptionWrapper>
  );
};
