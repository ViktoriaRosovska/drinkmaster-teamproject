import styled from 'styled-components';
import IconEdit2 from '../IconEdit2/IconEdit2';
import { ReactSVG } from 'react-svg';

const ModalContainer = styled.div`
  position: absolute;
  top: 55px;
  width: 177px;
  height: 134px;
  padding: 18px;
  border-radius: 8px;
  background-color: #161f37;
  color: #f3f3f3;
`;

const EditProfileBtn = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 18px;
  margin-bottom: 38px;
  border: none;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  background-color: transparent;
  color: #f3f3f3;
  cursor: pointer;
  color: 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
  &:hover {
    color: #f3f3f333;
  }
`;

const IconEdit = styled(IconEdit2)`
  width: 14px;
  height: 14px;
`;

const CloseModalLogoBtn = styled.button`
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
`;

const CloseSVGIcon = styled(ReactSVG)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: none;
  stroke: #f3f3f3;
  transition: scale 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
  &:hover {
    scale: 1.1;
  }
`;

export {
  EditProfileBtn,
  ModalContainer,
  IconEdit,
  CloseModalLogoBtn,
  CloseSVGIcon,
};
