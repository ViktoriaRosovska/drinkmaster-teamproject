import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Form, Field } from 'formik';
import styled, { css } from 'styled-components';
import transition from '../../../utils/transition';
import { ReactComponent as ErrorSvg } from '../../../assets/images/authComponents/error.svg';
import { ReactComponent as CheckSvg } from '../../../assets/images/authComponents/done.svg';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
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

export const AuthForm = styled(Form)`
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

export const BirthDate = styled(DesktopDatePicker)`
  width: 335px;
  display: block;
  padding: 18px 24px;
  border: 1px solid var(--white-twenty-color);
  border-radius: 200px;
  outline: none;
  font-size: 14px;
  line-height: 1.28;
  color: var(--white-fifty-color);
  background-color: transparent;
  transition: border ${transition}, color ${transition};

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
    width: 400px;
    font-size: 17px;
    line-height: 1.56;
    padding: 14px 24px;
  }
  /* .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root {
    color: var(--white-twenty-color);
    border: 1px solid var(--white-twenty-color);
    border-radius: 200px;
    transition: border ${transition};
  } */

  /* .
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: 1px solid var(--white-twenty-color);
    border-radius: 200px;
  }*/
  /* .css-z3c6am-MuiFormControl-root-MuiTextField-root {
    border: 1px solid var(--green-success-fifty-color);
  } */

  /* 
   */
  /* .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused {
    border-color: var(--white-fifty-color);
  } */

  /* .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root
    .MuiOutlinedInput-notchedOutline {
    border: 1.5px solid var(--green-success-fifty-color);
  }
  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: var(--green-success-fifty-color);
  } */
  .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root {
    font-size: 14px;
    line-height: 1.28;
    color: var(--white-fifty-color);
    border-radius: 200px;
    outline: none;
    background-color: transparent;
    transition: border ${transition}, color ${transition};
    padding-right: 18px;

    @media screen and (min-width: 768px) {
      padding-right: 24px;
    }
  }

  .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-error
    .MuiOutlinedInput-notchedOutline {
    border-color: var(--red-error-fifty-color);
  }

  .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-error:hover
    .MuiOutlinedInput-notchedOutline {
    border-style: 0px;
    border-color: transparent;
    color: var(--white-fifty-color);
  }

  .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root
    .MuiOutlinedInput-notchedOutline {
    border-color: var(--green-success-fifty-color);
  }
  .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: var(--white-twenty-color);
  }

  .jpVkwp .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root:focus,
  .jpVkwp .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root:hover {
    border: transparent;
  }
`;
