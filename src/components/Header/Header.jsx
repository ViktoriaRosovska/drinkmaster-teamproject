import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import { Container, Ul } from 'components/Header/Header.styled';

const Header = () => {
  return (
    <Container>
      <Ul>
        <li>
          <Logo />
        </li>
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
      </Ul>
    </Container>
  );
};

export default Header;
