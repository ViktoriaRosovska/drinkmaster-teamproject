import {
  AddFormInput,
  AddFormRadioGroup,
  AddFormSelect,
  AddFormSelectContainer,
  AddFormSelectLabel,
  AddPhotoContainer,
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
// import chevronDown from '../../assets/images/addDrink/chevron-down.svg';
import glasses from '../../helpers/Data/glasses';
import ingredients from '../../helpers/Data/ingredients.json';
// import { useState } from 'react';
export const DrinkDescriptionFields = () => {
  const [file, setFile] = useState();
  // const [value, setValue] = useState('Alcogolic');

  const handleChange = e => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
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
          <AddFormSelectLabel>Glass</AddFormSelectLabel>
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
