import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: none;
  flex-direction: row;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    column-gap: 16px;
    /* margin-left: 224px; */
  }
`;

export const DefButton = styled(NavLink)`
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
