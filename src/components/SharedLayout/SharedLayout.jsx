import { Outlet } from 'react-router-dom';

// SharedLayout component
export const SharedLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
