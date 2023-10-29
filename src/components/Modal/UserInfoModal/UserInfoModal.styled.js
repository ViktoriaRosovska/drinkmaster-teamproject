import styled from 'styled-components';
import IconEdit2 from '../IconEdit2/IconEdit2';
import { ReactSVG } from 'react-svg';

const ModalInfoContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 335px;
  height: 345px;
  padding: 50px 25px;
  border-radius: 16px;
  background-color: #161f37;
  color: #f3f3f3;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 426px;
    padding: 50px 50px 75px 50px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 39px auto;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const AvatarImg = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: none;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const LabelAddFile = styled.label`
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 10;
  cursor: pointer;
  transform: translate(-50%, -50%);
`;

const InputAddFile = styled.input`
  display: none;
`;

const ReactSVGIcon = styled(ReactSVG)`
  width: 29px;
  height: 29px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: scale 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
  &:hover {
    scale: 1.1;
  }
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const StyledForm = styled.form`
  background-color: transparent;
`;

const StyledLabel = styled.label`
  position: relative;
  display: block;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 54px;
  padding: 18px 24px;
  margin-bottom: 18px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  border-radius: 200px;
  border: 1px solid #f3f3f333;
  background-color: transparent;
  color: #f3f3f3;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
    font-size: 17px;
  }
`;

const IconEdit = styled(IconEdit2)`
  position: absolute;
  top: 19px;
  right: 19px;
  width: 16px;
  height: 16px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const SaveUserInfoBtn = styled.button`
  width: 100%;
  height: 54px;
  padding: 18px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 42px;
  background-color: #f3f3f3;
  color: #161f37;
  transition: background-color 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96),
    color 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96),
    border 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
  &:hover {
    border: 1px solid #f3f3f333;
    background-color: transparent;
    color: #f3f3f3;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;


const CloseModalBtn = styled.button`
position: absolute;
top: 18px;
right: 18px;
width: 24px;
height: 24px;
background-color: transparent;
color: #0000;
display: flex;
justify-content: center;
align-items: center;
transition: scale 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
&:hover {
  scale: 1.1;
}
@media screen and (min-width: 768px) {
  width: 32px;
  height: 32px;
}
`

export {
  ModalInfoContainer,
  SaveUserInfoBtn,
  IconEdit,
  AvatarImg,
  ReactSVGIcon,
  InputAddFile,
  LabelAddFile,
  ImageWrapper,
  StyledForm,
  StyledLabel,
  StyledInput,
  CloseModalBtn,
};
