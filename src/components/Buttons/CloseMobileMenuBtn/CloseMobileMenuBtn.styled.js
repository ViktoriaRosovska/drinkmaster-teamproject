import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

const CloseMobMenuBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  background-color: transparent;
  border: none;
  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const BurgerCloseIcon = styled(ReactSVG)`
  stroke: ${props => props.theme.color};
  & div {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & div svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    transition: scale 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
    scale: 1.1;
  }
  @media screen and (min-width: 768px) {
    & div svg {
      width: 20px;
      height: 20px;
    }
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export { BurgerCloseIcon, CloseMobMenuBtn };
