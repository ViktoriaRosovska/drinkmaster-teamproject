// Navigation component
import { NavLink } from 'react-router-dom';
import { Nav } from './Navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/drinks">Drinks</NavLink>
      </li>
      <li>
        <NavLink to="/add">Add drink</NavLink>
      </li>
      <li>
        <NavLink to="/my">My drinks</NavLink>
      </li>
      <li>
        <NavLink to="/favorites">Favorites</NavLink>
      </li>
    </Nav>
  );
}
