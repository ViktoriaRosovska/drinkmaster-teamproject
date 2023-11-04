import { MobileMenuContainer,  BurgerWrp } from './MobileBurgerMenu.styled';
import NavigationMobileMenu from './NavigationMobileMenu/NavigationMobileMenu/NavigationMobileMenu';

function MobileBurgerMenu({ hideOrShow, isOpenMobileMenu }) {
  return (
     <BurgerWrp style={hideOrShow}>
      <MobileMenuContainer  transform="isOpenMobileMenu">
        <NavigationMobileMenu />
      </MobileMenuContainer>
     </BurgerWrp>
  );
}

export default MobileBurgerMenu;
