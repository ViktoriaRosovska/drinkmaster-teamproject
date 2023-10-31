import React from 'react';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import {
  HeaderCont,
  Container,
  NavCont,
} from 'components/Header/Header.styled';

const Header = () => {
  return (
    <HeaderCont>
      <Container>
        <Logo />
        <NavCont>
          <Nav />
        </NavCont>
      </Container>
    </HeaderCont>
  );
};

export default Header;
