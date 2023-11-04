import styled from 'styled-components';
// import Navigation from '../Navigation/Navigation';

const BurgerWrp = styled.div`
  display: none;
`;

const MobileMenuContainer = styled.div`
  @media screen and (max-width: 1439.8px) {
    // background-color: #0a0a11;
    background-color: #ffffff;
    border: ${props =>
      props.isOpenMobileMenu ? 'translateY(72px)' : 'translateY(-100%)'};
    min-width: 100%;
    height: 60vh;
    // position: fixed;
    z-index: 101;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${props =>
      props.isOpenMobileMenu ? 'translateY(0)' : 'translateY(-120%)'};
    transition: transform 1s ease-in;
  }
`;

// const HeaderContainer = styled.header`
//   padding: 32px 20px;
//   border-bottom: 1px solid var(--white-twenty-color);
//   min-width: 320px;

//   @media screen and (min-width: 768px) {
//     padding: 20px 32px;
//   }
// `;
// const ThemeWrapper = styled.button`
//   background-color: #ffff;
//   width: 40px;
//   height: 20px;
//   border-radius: 16px;
// `;



export {
  MobileMenuContainer,
  // HeaderContainer,
  // ThemeWrapper,
  BurgerWrp,
};
