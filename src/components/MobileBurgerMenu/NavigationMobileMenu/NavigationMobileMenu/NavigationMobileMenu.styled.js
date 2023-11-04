import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  @media screen and (max-width: 1439.98px) {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
  & li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DefButton = styled(NavLink)`
  display: block;
  margin: auto;
  background-color: transparent;
  color: var(--white-color);
  padding: 8px 16px 8px 16px;
  border-radius: 40px;
  border: rgba(243, 243, 243, 0.2) solid 1px;
  &:hover {
    background-color: var(--dark-blue-color);
  }
  &.active {
    background-color: var(--dark-blue-color);
  }
`;
