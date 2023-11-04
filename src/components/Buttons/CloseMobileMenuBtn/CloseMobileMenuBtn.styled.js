import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

const CloseMobMenuBtn = styled.button`
  @media screen and (max-width: 1439.8px) {
    margin-left: auto;
    width: 32px;
    height: 32px;
    background-color: transparent;
    color: #f3f3f3;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const BurgerCloseIcon = styled(ReactSVG)`
  @media screen and (max-width: 767.8px) {
    width: 32px;
    height: 32px;
  }
  @media screen and (max-width: 1439.8px) {
    width: 38px;
    height: 38px;
    border: none;
    stroke: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
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
