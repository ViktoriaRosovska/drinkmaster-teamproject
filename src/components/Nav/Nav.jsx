import { NavList, NavItem, NavLink } from './Nav.styled';

const Nav = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink to="/drinks">Drinks</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/add">Add drink</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/my'>My drinks</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/favorites">Favorites drinks</NavLink>
      </NavItem>
    </NavList>
  );
};

export default Nav;