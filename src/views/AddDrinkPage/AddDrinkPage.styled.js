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
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  color: var(--white-color);
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const AddFormInput = styled.input`
  width: 335px;
  height: 34px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--white-fifty-color);

  &::placeholder {
    color: var(--white-color);
    font-family: 'Manrope';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
  }
`;

const AddFormTextarea = styled.textarea`
  width: 335px;
  height: 184px;
  border-radius: 14px;
  border: 1px solid var(--white-fifty-color);
  background-color: transparent;

  &::placeholder {
    color: var(--white-color);
    font-family: 'Manrope';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

const AddFormSelect = styled(Select)`
  padding: 0;
  width: 100%;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
  &::placeholder {
    color: red;
    font-family: 'Manrope';
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }
  & .css-1fdsijx-ValueContainer {
    padding: 0;
    color: var(--white-color);
    font-family: 'Manrope';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;

    & ::selection {
      background-color: transparent;
    }
  }

  & #react-select-3-listbox {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: 131px;
    height: 258px;
    padding: 0;
    color: red;
    background-color: #161f37;
    color: rgba(243, 243, 243, 0.4);
    font-family: 'Manrope';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    padding: 10px;
    overflow: hidden;
    position: absolute;
    right: 0;
    ::-webkit-scrollbar {
      width: 0;
    }
  }
  & .css-qbdosj-Input {
    color: var(--white-color);
    font-family: 'Manrope';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
  }
  & .css-t3ipsp-control {
    background-color: transparent;
  }
  & .css-13cymwt-control {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--white-fifty-color);
    border-radius: 0;
    outline: none;
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
  }
  & #react-select-5-listbox {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: 131px;
    height: 258px;
    padding: 0;
    color: red;
    background-color: #161f37;
    color: rgba(243, 243, 243, 0.4);
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    padding: 10px;
    overflow: hidden;
    position: absolute;
    right: 0;
    ::-webkit-scrollbar {
      width: 0;
    }
  }
`;

const AddFormRadioGroup = styled.div`
  display: flex;
  gap: 14px;
`;

const InputRadio = styled.input`
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #f3f3f380;
  & :checked {
    & label {
      color: red;
    }
  }
`;

const AddIngredientsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 38px;
  border: 1px solid #f3f3f3;
  background-color: transparent;
  border-radius: 200px;
  opacity: 0.8;
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
};
