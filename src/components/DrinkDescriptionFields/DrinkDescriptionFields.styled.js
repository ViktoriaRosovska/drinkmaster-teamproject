import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
// import Select from 'react-select';

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

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
  cursor: pointer;
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
  /* margin-bottom: 81px; */
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 352px;
  }
  @media screen and (min-width: 1438.98px) {
    width: 393px;
  }
`;

const AddFormRadioGroup = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: row;
`;

const AddFormInput = styled.input`
  height: 34px;
  width: 100%;
  font-family: 'Manrope';
  font-size: 14px;

  font-weight: 400;
  line-height: 19.12px;
  letter-spacing: -0.02em;

  letter-spacing: 0em;
  border: none;

  border-radius: 0;
  border-bottom: 1px solid var(--white-fifty-color);

  color: var(--white-color);
  background-color: transparent;
  position: relative;

  outline: none;
  &:hover {
    border-bottom: 1px solid var(--white-color);
  }
  &::placeholder {
    font-family: 'Manrope';
    font-size: 14px;
    font-weight: 400;
    line-height: 19.12px;
    letter-spacing: -0.02em;
    position: absolute;
    top: 0;
    color: var(--white-color);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
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

const AddFileLabel = styled.label`
  /* width: 335px;
  height: 320px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  /* cursor: pointer; */
  /* z-index: -1; */
`;

export {
  DescriptionWrapper,
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
  InputRadio,
  ChevronReactSvg,
  AddFormSelectLabel,
  AddFileLabel,
};
