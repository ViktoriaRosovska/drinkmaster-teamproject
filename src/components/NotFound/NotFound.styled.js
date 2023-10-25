import background1_sm from '../../assets/image/404/404_iced_tea@1x_sm.png';
import background2_sm from '../../assets/image/404/404_iced_tea@2x_sm.png';
import background1_md from '../../assets/image/404/404_iced_tea@1x_md.png';
import background2_md from '../../assets/image/404/404_iced_tea@2x_md.png';
import backgroundLeftCircle from '../../assets/image/404/Ellipseleft.png';

import styled from 'styled-components';

const NotFoundContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundImage = styled.div`
  width: 123px;
  height: 156px;
  background-image: url(${background1_sm});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${background2_sm});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${background1_md});
    width: 158px;
    height: 201px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${background2_md});
  }
`;

const NotFoundText = styled.p`
  color: rgba(243, 243, 243, 0.1);
  font-family: Manrope;
  font-size: 200px;
  font-style: normal;
  font-weight: 600;
  line-height: 200px;
`;

const NotFoundSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundLeftCircle});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export { NotFoundContainer, NotFoundImage, NotFoundText, NotFoundSection };
