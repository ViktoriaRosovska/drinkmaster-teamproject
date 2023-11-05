import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

const CloseMobMenuBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-left: auto;
  background-color: transparent;
  color: #f3f3f3;

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const BurgerCloseIcon = styled(ReactSVG)`
  @media screen and (max-width: 767.8px) {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    border: none;
    stroke: #f3f3f3;
    transition: scale 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
    &:focus {
      scale: 1.1;
    }
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export { BurgerCloseIcon, CloseMobMenuBtn };
