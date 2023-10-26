import { Outlet } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyled';

// SharedLayout component
export default function SharedLayout() {
  return (
    <>
      {/* <Header /> */}
      <GlobalStyle />
      <Outlet />

      {/* <Footer /> */}
    </>
  );
}
