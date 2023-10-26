import styled from 'styled-components';

import notFound1_sm from '../../assets/image/NotFound/blue_iced_tea@1x_sm.png';
import NotFound2_sm from '../../assets/image/NotFound/blue_iced_tea@2x_sm.png';
import NotFound1_md from '../../assets/image/NotFound/blue_iced_tea@2x_md.png';
import NotFound2_md from '../../assets/image/NotFound/blue_iced_tea@2x_md.png';

import { CenterPageContainer } from 'styles/App.styled';

const ErrorPageContainer = styled(CenterPageContainer)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const NotFoundText = styled.p`
  color: var(--white-color);
  text-align: center;
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 137.5% */
  width: 205px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 236px;
    line-height: 22px;
  }
`;
const NotFoundImage = styled.div`
  width: 198px;
  height: 247px;
  background-image: url(${notFound1_sm});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${NotFound2_sm});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${NotFound1_md});
    width: 261px;
    height: 326px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${NotFound2_md});
  }
`;

export { ErrorPageContainer, NotFoundImage, NotFoundText };
