import { Suspense } from 'react';
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

const SharedLayout = () => {
  const theme = useSelector(state => state.auth.theme);

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <LayoutContainer>
          <GlobalStyled />

          <Header />

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
