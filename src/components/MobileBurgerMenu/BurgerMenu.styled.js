import { Drawer } from '@mui/material';
import styled from 'styled-components';

const BurgerWrp = styled.div`
  min-width: 320px;
  width: 375px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
const DrawerWrp = styled(Drawer)`
  width: 375px;
`;

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

export { Ellipse224, Ellipse223, BurgerWrp, DrawerWrp };
