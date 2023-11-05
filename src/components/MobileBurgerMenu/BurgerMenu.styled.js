import styled from 'styled-components';

// const BurgerWrp = styled.div`
//   display: none;
// `;

// const MobileMenuContainer = styled.div`
//   @media screen and (max-width: 1439.8px) {
//     // background-color: #0a0a11;
//     background-color: #ffffff;
//     min-width: 100%;
//     height: 60vh;
//     // position: fixed;
//     z-index: 101;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     transform: ${props =>
//       props.isOpenMobileMenu ? 'translateY(0)' : 'translateY(-120%)'};
//     transition: transform 1s ease-in;
//   }
// `;
const Ellipse224 = styled.div`
@media screen and (max-width: 767.98px) {
  left: 331px;
}
@media screen and (max-width: 1439.98px) {
  position: absolute;
  width: 549px;
  height: 543px;
  left: 651px;
  top: 498px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.854px);
  z-index: 5002;
}
`;

const Ellipse223 = styled.div`
@media screen and (max-width: 767.98px) {
  width: 520px;
  height: 550px;
  left: -399px;
  top: 20px;
  background: rgba(64, 112, 205, 0.5);
}
@media screen and (max-width: 1439.98px) {
  position: absolute;
  width: 387px;
  height: 372px;
  left: -150px;
  top: -116px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.854px);
  z-index: 5002;
}
`;


export {
  Ellipse224,
  Ellipse223
  // MobileMenuContainer,
  // BurgerWrp,
};
