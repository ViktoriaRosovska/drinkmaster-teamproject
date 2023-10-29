import { Form, Field } from 'formik';
import styled, { css } from 'styled-components';
import transition from '../../../utils/transition';
import { ReactComponent as ErrorSvg } from '../../../assets/images/authComponents/error.svg';
import { ReactComponent as CheckSvg } from '../../../assets/images/authComponents/done.svg';
import { NavLink } from 'react-router-dom';

import bgImageMobile from '../../../assets/images/welcomePage/bg-welcome-mob@1x.jpg';
import bgImageMobile2x from '../../../assets/images/welcomePage/bg-welcome-mob@2x.jpg';
import bgImageTablet from '../../../assets/images/welcomePage/bg-welcome-tab@1x.jpg';
import bgImageTablet2x from '../../../assets/images/welcomePage/bg-welcome-tab@2x.jpg';
import bgImageDesc from '../../../assets/images/welcomePage/bg-welcome-desc@1x.jpg';
import bgImageDesc2x from '../../../assets/images/welcomePage/bg-welcome-desc@2x.jpg';

export const Section = styled.section`
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

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 335px;
  @media screen and (max-width: 374.98px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const Title = styled.h1`
  color: var(--white-color);
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.56px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 335px;
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;

export const Input = styled(Field)`
  width: 285px;
  display: block;
  padding: 18px 24px;
  border: 1px solid var(--white-twenty-color);
  border-radius: 200px;
  outline: none;
  font-size: 14px;
  line-height: 1.28;
  color: var(--white-fifty-color);
  background-color: transparent;
  transition: border ${transition};

  &:focus,
  &:hover {
    border: 1px solid var(--white-fifty-color);
    color: var(--white-fifty-color);
  }

  ${({ error }) =>
    error === 'true' &&
    css`
      border: 1px solid var(--red-error-fifty-color);
    `}
  ${({ success }) =>
    success === 'true' &&
    css`
      border: 1px solid var(--green-success-fifty-color);
    `}
    
  @media screen and (min-width: 768px) {
    width: 350px;
    font-size: 17px;
    line-height: 1.56;
    padding: 14px 24px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  position: relative;
  padding: 18px;
  background-color: var(--white-color);
  border-radius: 42px;
  color: var(--dark-blue-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28571;
  margin-bottom: 14px;
  margin-top: 14px;
  display: flex;
  justify-content: center;
  border: none;
  transition: border ${transition}, background-color ${transition};
  &:focus,
  &:hover {
    background-color: transparent;
    color: var(--white-color);
    border: 1px solid var(--white-fifty-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;
  z-index: 10;
  border: none;
  position: absolute;
  top: 18px;
  right: 24px;
  padding: 0;
`;

export const ErrorText = styled.p`
  position: ${({ absolute, select }) =>
    absolute === 'true' || select === 'true' ? 'absolute' : 'static'};
  left: ${({ select }) => (select === 'true' ? 'unset' : '25px')};
  right: ${({ select }) => (select === 'true' ? '0' : 'unset')};
  bottom: -24px;
  color: #da1414;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;
  margin-left: ${({ absolute, select }) =>
    absolute === 'true' || select === 'true' ? '0' : '25px'};
  margin-top: ${({ absolute, select }) =>
    absolute === 'true' || select === 'true' ? '0' : '8px'};
  /* width: ${({ select }) => (select === 'true' ? '200px' : '100%')}; */
  white-space: nowrap;
  text-align: ${({ select }) => (select === 'true' ? 'right' : 'left')};
`;

export const ErrorSvgStyled = styled(ErrorSvg)`
  position: absolute;
  top: 18px;
  right: 24px;
`;

export const CheckSvgStyled = styled(CheckSvg)`
  position: absolute;
  top: 18px;
  right: 24px;
`;

export const Link = styled(NavLink)`
  color: var(--white-color);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33px;
  text-decoration-line: underline;
  text-align: center;
`;
