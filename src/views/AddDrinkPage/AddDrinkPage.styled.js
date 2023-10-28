import Select from 'react-select';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

const AddPhotoContainer = styled.div`
  width: 335px;
  height: 320px;
  background-color: var(--dark-blue-fifty-color);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 18px;
`;

const AddDrinkContainer = styled.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-left: auto;
  margin-right: auto;
`;

const AddBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 6px;
  background-color: var(--white-color);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 1px solid var(--dark-blue-twenty-color);
    & svg {
      stroke: var(--dark-blue-fifty-color);
    }
  }
`;

const ChevronReactSvg = styled(ReactSVG)`
  width: 20px;
  height: 20px;
  /* opacity: 0.5; */
  & div svg {
    stroke: var(--white-color);
  }
`;

const QuantityIconReactSvg = styled(ReactSVG)`
  width: 16px;
  height: 16px;
  & div svg {
    stroke: var(--white-color);
  }
`;

const CloseIconReactSvg = styled(ReactSVG)`
  width: 18px;
  height: 18px;

  & div svg {
    /* stroke: var(--white-color); */
    stroke: red;
  }
`;

const ReactSVGIcon = styled(ReactSVG)`
  & div svg {
    width: 29px;
    height: 29px;
    stroke: var(--dark-blue-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const AddBtnText = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  color: var(--white-color);
`;

const AddFormInput = styled.input`
  line-height: 14px;
  letter-spacing: 0em;

  border: none;
  border-bottom: 1px solid var(--white-fifty-color);

  color: var(--white-color);
  background-color: transparent;
  position: relative;
  width: 335px;
  height: 34px;
  outline: none;
  &:hover {
    border-bottom: 1px solid var(--white-color);
  }
  &::placeholder {
    font-family: 'Manrope';
    line-height: normal;
    letter-spacing: -0.28px;
    position: absolute;
    top: 0;
    color: var(--white-color);

    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: -0.02em;
    text-align: left;

    /* color: red; */
  }
`;

const AddFormTextarea = styled.textarea`
  border-radius: 14px;
  border: 1px solid var(--white-fifty-color);
  background-color: transparent;
  margin-bottom: 20px;
  width: 335px;
  height: 184px;
  &::placeholder {
    color: var(--white-color);
    line-height: calc(14px / 18px);
  }
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  margin-bottom: 81px;
`;

const AddFormSelectContainer = styled.div`
  height: 34px;
  position: relative;
`;

const AddFormSelect = styled(Select)`
  padding: 0;
  width: 100%;
  height: 34px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
  & .css-1dimb5e-singleValue {
    line-height: 1;
    text-align: left;
    height: 34px;

    color: var(--white-color);

    padding: 0;
  }
  & .css-1fdsijx-ValueContainer {
    padding: 0;
    & ::selection {
      background-color: transparent;
    }
  }
  // Випадаюче меню списка
  & #react-select-3-listbox {
    font-size: 12px;
    line-height: 16px;

    background-color: var(--dark-blue-color);
    color: rgba(243, 243, 243, 0.4);
    border-radius: 12px;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;

    /* padding: 10px; */
    /* overflow-y: scroll; */
    overflow: hidden;
    position: absolute;
    width: 131px;
    height: 256px;
    right: 0;
    ::-webkit-scrollbar {
      /* width: 5px; */
      width: 0;
    }
  }
  & .css-13cymwt-control {
    border: none;
    border-bottom: 1px solid var(--white-color);
  }
  & .css-1dimb5e-singleValue {
    margin-right: 28px;
  }
  & .css-qbdosj-Input {
    line-height: normal;
    letter-spacing: -0.28px;

    color: var(--white-color);

    height: 34px;
    padding: 0;
    margin-right: 28px;
    margin: 0 0 0 60px;
  }

  & .css-166bipr-Input {
    color: var(--white-color);
    margin-left: 60px;
  }

  & .css-13cymwt-control {
    line-height: 14px;
    letter-spacing: 0em;

    background-color: transparent;
    color: var(--white-color);

    height: 34px;
  }
  & .css-1xc3v61-indicatorContainer {
    display: none;
    outline: none;
  }
  & .css-1hb7zxy-IndicatorsContainer {
    display: none;
  }
  & .react-select-3-placeholder {
    display: block;
  }
  & .css-1dimb5e-singleValue {
    text-align: right;
  }
  & .css-1u9des2-indicatorSeparator {
    display: none;
  }
  & #react-select-3-input {
    text-align: right;
    margin-left: 50px;
    height: 34px;
  }
  & #react-select-5-listbox {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: 131px;
    height: 258px;
    padding: 0;
    background-color: var(--dark-blue-color);
    color: rgba(243, 243, 243, 0.4);
    font-size: 12px;
    line-height: 16px;
    padding: 10px;

    //стилізувати скрол

    /* overflow-y: scroll; */
    overflow: hidden;
    position: absolute;
    right: 0;
    ::-webkit-scrollbar {
      /* width: 5px; */
      width: 0;
    }
    & :hover {
      background-color: none;
    }
  }
`;

const AddFormRadioGroup = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: row;
`;

const InputRadio = styled.input`
  /* display: none; */
`;

const AddIngredientsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--white-color);
  background-color: transparent;
  border-radius: 200px;
  opacity: 0.8;
  width: 104px;
  height: 38px;
`;

const AddFormSelectLabel = styled.label`
  line-height: 19px;
  letter-spacing: -0.02em;

  color: var(--white-fifty-color);

  display: inline-flex;
  justify-content: space-between;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  width: 335px;
`;

const SubTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;

const QuantityIngredients = styled.div`
  width: 104px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
`;

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 34px;
`;

const QuantityBtn = styled.button`
  background-color: transparent;
  /* border: 1px solid red; */
  border: none;
  border-radius: 200px 0 0 200px;
  width: 40px;
  height: 38px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuantityBtnMirror = styled(QuantityBtn)`
  transform: rotate(180deg);
`;

const QuantityText = styled.span`
  letter-spacing: 0em;
  text-align: center;
  width: 20px;
  text-align: center;
`;

const AddIngedientSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export {
  AddPhotoContainer,
  AddDrinkContainer,
  AddBtn,
  ReactSVGIcon,
  AddBtnText,
  AddFormInput,
  AddFormTextarea,
  AddFormSelect,
  AddFormRadioGroup,
  InputRadio,
  AddIngredientsContainer,
  AddFormSelectLabel,
  AddFormSelectContainer,
  SelectContainer,
  ChevronReactSvg,
  SubTitle,
  QuantityIngredients,
  QuantityContainer,
  QuantityBtn,
  QuantityText,
  QuantityIconReactSvg,
  QuantityBtnMirror,
  CloseIconReactSvg,
  AddIngedientSelect,
};
