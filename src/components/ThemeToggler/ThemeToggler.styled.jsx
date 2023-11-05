import { styled } from 'styled-components';

export const StyledButton = styled.button`
@media screen and (max-width: 1439.99px) {
  // display: ${props => (props.isOpenBurgerMenu ? 'flex' : 'none')};
  display: flex;
}

  width: 30px;
  height: 30px;
  border-radius: 50%;
  border-color: ${props => props.theme};
  padding-top: 8px;
  padding-bottom: 8px;

  justify-content: center;
  align-items: center;

  background-color: white;

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;
