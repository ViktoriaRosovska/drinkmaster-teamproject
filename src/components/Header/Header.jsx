import React from 'react';

import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/Buttons/UserLogo/UserLogo';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import CloseMobileMenuBtn from 'components/Buttons/CloseMobileMenuBtn/CloseMobileMenuBtn';
import BurgerBtn from 'components/Buttons/BurgerBtn/BurgerBtn';
import {
  Container,
  HeaderCont,
  HeaderList,
  MainWrapper,
  HeaderItem,
  LastHeaderItem,
} from './Header.styled';


const Header = ({ isOpenMobileMenu, toggleMobileMenu }) => {
  console.log(isOpenMobileMenu);

  return (
    <>
      <HeaderCont>
        <Container>
          <MainWrapper>
            <HeaderList>
              <HeaderItem>
                <Logo />
              </HeaderItem>
              <HeaderItem>
                <Navigation />
              </HeaderItem>
              <HeaderItem className="push-right">
                <LastHeaderItem>
                <ThemeToggler isOpenMobileMenu={isOpenMobileMenu} />
                {!isOpenMobileMenu && <UserLogo />}
                {isOpenMobileMenu ? (
                  <CloseMobileMenuBtn toggleMobileMenu={toggleMobileMenu} />
                ) : (
                  <BurgerBtn toggleMobileMenu={toggleMobileMenu} />
                )}
                </LastHeaderItem>
              </HeaderItem>
            </HeaderList>
          </MainWrapper>
        </Container>
      </HeaderCont>
    </>
  );
};

export default Header;
