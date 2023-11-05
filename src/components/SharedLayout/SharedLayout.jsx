import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Loader from '../Loader';
import { Main, LayoutContainer } from './SharedLayout.styled';
import GlobalStyled from 'styles/GlobalStyled';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from 'components/ThemeToggler/dark';
import { lightTheme } from 'components/ThemeToggler/light';
import BurgerMenu from 'components/MobileBurgerMenu/BurgerMenu';
import authSelectors from '../../redux/auth/authSelectors';

const SharedLayout = () => {
  const theme = useSelector(authSelectors.selectTheme);

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setIsOpenMobileMenu(prev => !prev);
  }

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <LayoutContainer>
          <GlobalStyled />

          <Header isOpenMobileMenu={isOpenMobileMenu} toggleMobileMenu={toggleMobileMenu}/>
          <BurgerMenu isOpenMobileMenu={isOpenMobileMenu} toggleMobileMenu={toggleMobileMenu}/>
          <Main>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Main>

          <Footer />
        </LayoutContainer>
      </ThemeProvider>
    </>
  );
};

export default SharedLayout;
