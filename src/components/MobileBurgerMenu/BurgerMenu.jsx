import React from 'react';
import Drawer from '@mui/material/Drawer';
import NavigationMobileMenu from './NavigationMobileMenu/NavigationMobileMenu/NavigationMobileMenu';
// import CloseMobileMenuBtn from 'components/Buttons/CloseMobileMenuBtn/CloseMobileMenuBtn';
import {Ellipse223, Ellipse224} from './BurgerMenu.styled';

const BurgerMenu = ({ isOpenMobileMenu, toggleMobileMenu }) => {
  console.log(isOpenMobileMenu);
  // MuiDrawer

  return (
    <>
      <Drawer
        anchor="top"
        variant="temporary"
        open={isOpenMobileMenu}
        onClose={toggleMobileMenu}
        sx={{
          // width: 400,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '100%',
            height: '100vh',
            boxSizing: 'border-box',
            backgroundColor: '#0a0a11',
            alignItems: 'center',
            justifyContent: 'center',
            overflowY: 'hidden',
          },
        }}
      >
        <Ellipse223 />
        <Ellipse224 />
        <NavigationMobileMenu toggleMobileMenu={toggleMobileMenu} />
      </Drawer>
    </>
  );
};

export default BurgerMenu;
