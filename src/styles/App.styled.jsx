import styled from 'styled-components';
import bgImageMobile from '../assets/images/welcomePage/bg-welcome-mob@1x.jpg';
import bgImageMobile2x from '../assets/images/welcomePage/bg-welcome-mob@2x.jpg';
import bgImageTablet from '../assets/images/welcomePage/bg-welcome-tab@1x.jpg';
import bgImageTablet2x from '../assets/images/welcomePage/bg-welcome-tab@2x.jpg';
import bgImageDesc from '../assets/images/welcomePage/bg-welcome-desc@1x.jpg';
import bgImageDesc2x from '../assets/images/welcomePage/bg-welcome-desc@2x.jpg';

const MainContainer = styled.div`
  min-width: 320px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  /* background-color: var(--black-color); */

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 140px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 160px;
  }
`;

const WelcomeWrapper = styled.section`
  background-image: url(${bgImageMobile});
  background-color: var(--black-color);
  background-position: center;
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 257px;
    height: 247px;
    transform: translate(-80%, -140%);
    background: rgba(188, 230, 210, 0.4);
    border-radius: 257px;
    filter: blur(104.8543701171875px);
    z-index: 1;
    pointer-events: none;
    @media screen and (min-width: 768px) {
      width: 387px;
      height: 372.442px;
      border-radius: 387px;
      background: rgba(188, 230, 210, 0.3);
      top: 50%;
      left: 50%;
      transform: translate(-90%, -120%);
    }
    @media screen and (min-width: 1440px) {
      width: 387px;
      height: 381px;
      background: rgba(188, 230, 210, 0.4);
      top: 50%;
      left: 50%;
      transform: translate(-129%, -160%);
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: -20%;
    right: 90%;
    width: 520px;
    height: 550px;
    transform: translateY(-50%, 50%);
    border-radius: 550px;
    background: rgba(64, 112, 205, 0.5);
    filter: blur(104.8543701171875px);
    z-index: 1;
    pointer-events: none;
    @media screen and (min-width: 768px) {
      width: 784px;
      height: 829.931px;
      border-radius: 829.931px;
      top: -50%;
      right: 90%;
      z-index: 1;
    }
    @media screen and (min-width: 1440px) {
      height: 849px;
      top: -25%;
      right: 85%;
      z-index: 1;
    }
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgImageMobile2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${bgImageTablet});
    justify-content: left;
    padding-left: 64px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgImageTablet2x});
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${bgImageDesc});
    background-color: rgb(7, 7, 11);
    padding-left: 100px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgImageDesc2x});
    }
  }
`;

export { MainContainer, WelcomeWrapper };
