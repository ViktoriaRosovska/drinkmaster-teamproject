import React, { useState } from 'react';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/Buttons/UserLogo/UserLogo';
import {
  Container,
  HeaderCont,
  HeaderList,
  MainWrapper,
  HeaderItem,
} from './Header.styled';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';

// import MobileBurgerMenu from 'components/MobileBurgerMenu/MobileBurgerMenu';
import CloseMobileMenuBtn from 'components/Buttons/CloseMobileMenuBtn/CloseMobileMenuBtn';
import BurgerBtn from 'components/Buttons/BurgerBtn/BurgerBtn';
import NavigationMobileMenu from 'components/MobileBurgerMenu/NavigationMobileMenu/NavigationMobileMenu/NavigationMobileMenu';

const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  // const [hideOrShow, setHideOrShow] = useState({});

  const toggleMobileMenu = () => {
    setIsOpenMobileMenu(prev => !prev);
    // if (isOpenMobileMenu) {
    //   setHideOrShow(() => {
    //     return {};
    //   });
    // } else {
    //   setHideOrShow(() => {
    //     return { display: 'flex' };
    //   });
    // }
  };

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
              <ThemeToggler />
              <HeaderItem className="push-right">

                {isOpenMobileMenu && <div>Theme</div>}

                <UserLogo />

              </HeaderItem>
              {!isOpenMobileMenu && <UserLogo />}
              {isOpenMobileMenu ? (
                <CloseMobileMenuBtn toggleMobileMenu={toggleMobileMenu} />
              ) : (
                <BurgerBtn toggleMobileMenu={toggleMobileMenu} />
              )}
            </HeaderList>
          </MainWrapper>
        </Container>
      </HeaderCont>
      {isOpenMobileMenu && (
        <div
          style={{
            height: '100vh',
            backgroundColor: '#0a0a11',
            width: '100%',
            fontSize: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: '86px',
            listStyle: 'none',
            zIndex: 120,
            transform: isOpenMobileMenu ? 'translateY(0)' : 'translateY(-120%)',
            transition: 'transform 1s ease-in',
          }}
          // style={hideOrShow}
        >
          <NavigationMobileMenu />
          {/* <div
          style={{
            // backgroundColor: '#ff0000',
            zIndex: '101',
            transform: isOpenMobileMenu ? 'translateY(-120%)' : 'translateY(0)',
            transition: 'transform 1s ease-in',
            height: '100vh',
            display: 'block'}}
        ><NavigationMobileMenu/></div> */}
        </div>
      )}
      {/* <MobileBurgerMenu hideOrShow={hideOrShow} isOpenMobileMenu={isOpenMobileMenu}/> */}
    </>
  );
};

export default Header;
