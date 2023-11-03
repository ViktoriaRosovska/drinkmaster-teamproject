import IconBurger from '../../../assets/images/burgerMenu/burger.svg';
import { BurgerButton, BurgerSVGIcon } from './BurgerBtn.styled';

export default function BurgerBtn({toggleMobileMenu}) {
  return (
    <BurgerButton type="button" onClick={toggleMobileMenu}>
      <BurgerSVGIcon src={IconBurger} />
    </BurgerButton>
  );
}