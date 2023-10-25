import { Outlet } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyled';

// SharedLayout component
export const SharedLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <GlobalStyle>
        <Outlet />
      </GlobalStyle>

      {/* <Footer /> */}
    </>
  );
};
