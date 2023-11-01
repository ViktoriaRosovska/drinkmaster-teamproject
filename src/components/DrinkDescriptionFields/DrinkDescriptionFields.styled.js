import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import Select from 'react-select';

const AddPhotoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 320px;
  background-color: var(--dark-blue-fifty-color);
  border-radius: 8px;
  margin-bottom: 40px;
`;

const FileImage = styled.img`
  width: 335px;
  height: 320px;
  background-color: red;
`;

const InputFileWrapper = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  background-color: var(--white-color);
  border: none;
  display: flex;

  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const InputAddFile = styled.input`
  display: none;
`;

const InputText = styled.span`
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  position: absolute;
  bottom: 96px;
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

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  margin-bottom: 81px;
`;

const AddFormSelect = styled(Select)`
  padding: 0;
  width: 100%;
  height: 34px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
`;

const AddFormRadioGroup = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: row;
`;

const AddFormInput = styled.input`
  line-height: 14px;
  letter-spacing: 0em;
  border: none;
  border-radius: 0;
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
const InputRadio = styled.input`
  /* display: none; */
`;
const ChevronReactSvg = styled(ReactSVG)`
  width: 20px;
  height: 20px;
  /* opacity: 0.5; */
  & div svg {
    stroke: var(--white-color);
  }
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

const AddFormSelectContainer = styled.div`
  height: 34px;
  position: relative;
`;
export {
  InputAddFile,
  InputFileWrapper,
  FileImage,
  InputText,
  AddPhotoContainer,
  AddFormSelectContainer,
  ReactSVGIcon,
  SelectContainer,
  AddFormInput,
  AddFormRadioGroup,
  AddFormSelect,
  InputRadio,
  ChevronReactSvg,
  AddFormSelectLabel,
};
