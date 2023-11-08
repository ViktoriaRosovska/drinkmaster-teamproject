import React from 'react';
import Drawer from '@mui/material/Drawer';
import NavigationMobileMenu from './NavigationMobileMenu/NavigationMobileMenu/NavigationMobileMenu';
import {BurgerWrp, Ellipse223, Ellipse224} from './BurgerMenu.styled';

const BurgerMenu = ({ isOpenMobileMenu, toggleMobileMenu }) => {
  console.log(isOpenMobileMenu);
  
  return (
    <BurgerWrp>
      <Drawer
        anchor="top"
        variant="temporary"
        open={isOpenMobileMenu}
        onClose={toggleMobileMenu}
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '100vw',
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
        <NavigationMobileMenu />
      </Drawer>
    </BurgerWrp>
  );
};

export default BurgerMenu;
