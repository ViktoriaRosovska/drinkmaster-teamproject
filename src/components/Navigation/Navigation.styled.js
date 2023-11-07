import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    column-gap: 16px;
    /* margin-left: 224px; */
  }
`;

export const DefButton = styled(NavLink)`
  background-color: transparent;
  color: ${props => props.theme.color};
  padding: 8px 16px 8px 16px;
  border-radius: 40px;
  border: ${props => props.theme.borderColor} solid 1px;
  transition: transform var(--transition), border var(--transition);
  &:hover {
    background-color: ${props => props.theme.btnHoverColor};
    border: ${props => props.theme.paginationAccentColor} solid 1px;
    color: ${props => props.theme.activeHeaderColor};
    transform: scale(1.05);
    box-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px #7fffd4;
  }
  &.active {
    background-color: ${props => props.theme.btnHoverColor};
    color: ${props => props.theme.activeHeaderColor};
  }
`;
