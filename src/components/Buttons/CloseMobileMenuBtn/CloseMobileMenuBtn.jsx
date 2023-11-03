import { BurgerCloseIcon, CloseMobMenuBtn } from './CloseMobileMenuBtn.styled';
import IconBurgerMenuClose from '../../../assets/images/burgerMenu/burgerclose.svg';

export default function CloseMobileMenuBtn({toggleMobileMenu}) {
  return (
    <CloseMobMenuBtn type="button" onClick={toggleMobileMenu}>
      <BurgerCloseIcon src={IconBurgerMenuClose} />
    </CloseMobMenuBtn>
  );
}
