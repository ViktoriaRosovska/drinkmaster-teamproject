// import IconBurger from '../../../assets/images/burgerMenu/burger.svg';
import { BurgerButton, SvgBurger } from './BurgerBtn.styled';

export default function BurgerBtn({ toggleMobileMenu }) {
  return (
    <BurgerButton type="button" onClick={toggleMobileMenu}>
      <SvgBurger />
      {/* <BurgerSVGIcon src={IconBurger} /> */}
    </BurgerButton>
  );
}
