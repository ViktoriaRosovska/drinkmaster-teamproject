import {
  AddFileLabel,
  AddFormInput,
  AddFormRadioGroup,
  AddFormSelectLabel,
  AddPhotoContainer,
  DescriptionWrapper,
  FileImage,
  InputAddFile,
  InputFileWrapper,
  InputRadio,
  InputText,
  RadioLabel,
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
import { ShowError } from 'components/ShowError/ShowError';
import { RelativeWrapper } from 'components/Forms/AddDrinkForm/AddDrinkForm.styled';

export const DrinkDescriptionFields = ({
  values,
  errors,
  touched,
  handleChange,
  setFieldValue,
  ...props
}) => {
  const categories = useSelector(selectCategories);
  const glasses = useSelector(selectGlasses);

  const [radioAlco, setRadioAlco] = useState('Non-alcoholic');
  const [selectedFileImage, setSelectedFileImage] = useState(null);
  const [description, setDescription] = useState('');
  const [drink, setDrink] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getGlasses());
    dispatch(getIngredients());
  }, [dispatch]);

  const handleFileChange = e => {
    const file = e.target.files[0];
    setFieldValue('drinkThumb', file);
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

  const [glassSelect, setGlassSelect] = useState('');
  const [categorySelect, setCategorySelect] = useState('');

  const handleCategorySelectChange = e => {
    const value = e.value;
    setCategorySelect(value);
    setFieldValue('category', value);
  };

  const handleGlassSelectChange = e => {
    const value = e.value;
    setGlassSelect(value);
    setFieldValue('glass', value);
  };

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

  console.log('DDD', values, errors, touched);

  return (
    <DescriptionWrapper>
      <RelativeWrapper>
        <AddPhotoContainer>
          {selectedFileImage && (
            <FileImage
              src={selectedFileImage ? selectedFileImage : null}
              alt="Selected image"
            />
          )}

          <AddFileLabel htmlFor="drinkThumb">
            <InputAddFile
              type="file"
              placeholder=""
              onChange={e => handleFileChange(e)}
              id="drinkThumb"
              name="drinkThumb"
              accept="image/*"
            />
            <InputFileWrapper>
              <ReactSVGIcon src={IconPlus} />
            </InputFileWrapper>
          </AddFileLabel>

          <InputText>Add drink</InputText>
        </AddPhotoContainer>
        {errors.drinkThumb && touched.drinkThumb ? (
          <ShowError message="Select a drink image" />
        ) : null}
      </RelativeWrapper>

      <SelectContainer>
        <RelativeWrapper>
          <AddFormInput
            name="drink"
            id="drink"
            type="text"
            data-limit="40"
            placeholder="Enter item title"
            onChange={e => {
              handleTitleChange(e);
              handleChange(e);
            }}
            error={errors.drink && touched.drink ? 'true' : 'false'}
            success={values.drink && !errors.drink ? 'true' : 'false'}
            value={drink}
          />
          {touched.drink && errors.drink ? (
            <ShowError message={errors.drink} />
          ) : null}
        </RelativeWrapper>
        <RelativeWrapper>
          <AddFormInput
            type="text"
            id="description"
            placeholder="Enter about recipe"
            name="description"
            onChange={e => handleDescriptionChange(e)}
            value={description}
            error={errors.description && touched.description ? 'true' : 'false'}
            success={
              values.description && !errors.description ? 'true' : 'false'
            }
          />
          {touched.description && errors.description ? (
            <ShowError message={errors.description} />
          ) : null}
        </RelativeWrapper>

        <RelativeWrapper>
          <AddFormSelectLabel>Category</AddFormSelectLabel>
          <DrinkFormCustomSelect
            placeholder=""
            options={categories}
            value={categorySelect}
            name="category"
            error={errors.category && touched.category ? 'true' : 'false'}
            success={values.category && !errors.category ? 'true' : 'false'}
            onChange={handleCategorySelectChange}
          />
          {errors.category && touched.category ? (
            <ShowError message={errors.category} />
          ) : null}
        </RelativeWrapper>

        <RelativeWrapper>
          <AddFormSelectLabel>Glass</AddFormSelectLabel>

          <DrinkFormCustomSelect
            placeholder=""
            options={glasses}
            value={glassSelect}
            name="glass"
            error={errors.glass && touched.glass ? 'true' : 'false'}
            success={values.glass && !errors.glass ? 'true' : 'false'}
            onChange={handleGlassSelectChange}
          />
          {errors.glass && touched.glass ? (
            <ShowError message={errors.glass} />
          ) : null}
        </RelativeWrapper>
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
          <RadioLabel
            htmlFor="typeAlco"
            id="typeAlcoLabel"
            style={{
              color: radioAlco === 'Alcoholic' && `#4070CD`,
            }}
          >
            Alcoholic
          </RadioLabel>
          <InputRadio
            type="radio"
            id="typeNonAlco"
            name="typeDrink"
            value="Non-alcoholic"
            checked={radioAlco === 'Non-alcoholic' ? true : false}
            onChange={e => changeRadioAlco(e)}
          />
          <RadioLabel
            htmlFor="typeNonAlco"
            id="typeNonAlcoLabel"
            style={{
              color: radioAlco === 'Non-alcoholic' && `#4070CD`,
            }}
          >
            Non-alcoholic
          </RadioLabel>
        </AddFormRadioGroup>
      </SelectContainer>
    </DescriptionWrapper>
  );
};
