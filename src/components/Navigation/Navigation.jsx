// Navigation component
// import { NavLink } from 'react-router-dom';
import { Nav, DefButton } from './Navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <li>
        <DefButton to="/home">Home</DefButton>
      </li>
      <li>
        <DefButton to="/drinks">Drinks</DefButton>
      </li>
      <li>
        <DefButton to="/add">Add drink</DefButton>
      </li>
      <li>
        <DefButton to="/my">My drinks</DefButton>
      </li>
      <li>
        <DefButton to="/favorites">Favorites</DefButton>
      </li>
    </Nav>
  );
}
