import { Form, Field } from 'formik';
import styled, { css } from 'styled-components';

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 28px;
  margin-top: 259px;

  @media screen and (min-width: 768px) {
    margin-top: 350px;
    font-size: 40px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 223px;
  }
`;

export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 335px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 18px 24px;
  border: 1px solid var(--white-twenty-color);
  border-radius: 200px;
  outline: none;
  font-size: 14px;
  line-height: 1.28;
  color: var(--white-fifty-color);
  background-color: transparent;
  transition: border 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);

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
    font-size: 17px;
    line-height: 1.56;
    padding: 14px 24px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;
