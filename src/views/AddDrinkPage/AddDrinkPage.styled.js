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
    font-family: Manrope;
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
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

const AddFormSelect = styled(Select)`
  width: 100%;
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
export {
  AddPhotoContainer,
  AddDrinkContainer,
  AddBtn,
  ReactSVGIcon,
  AddBtnText,
  AddFormInput,
  AddFormTextarea,
  AddFormSelect,
};
