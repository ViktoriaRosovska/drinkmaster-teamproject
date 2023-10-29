import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Header } from '../Header/Header';
import Loader from '../Loader';
import { Main, LayoutContainer } from './SharedLayout.styled';
import GlobalStyled from 'styles/GlobalStyled';
import Footer from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <LayoutContainer>
        <GlobalStyled />

        {/* <Header /> */}

        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>

         <Footer />
      </LayoutContainer>
    </>
  );
};

export default SharedLayout;
