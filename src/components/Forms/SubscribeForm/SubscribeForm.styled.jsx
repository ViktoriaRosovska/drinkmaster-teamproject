import { Field, Form as FormikForm } from 'formik';
import styled from 'styled-components';

export const SubscribeWrapper = styled(FormikForm)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 309px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const SubscribeInput = styled(Field)`
  width: 335px;
  margin-top: 24px;
  margin-bottom: 18px;
  padding: 18px 24px;
  border-radius: 200px;
  border: 1px solid var(--white-twenty-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  color: var(--white-fifty-color);
  background-color: transparent;
  transition: border var(--transition), transform var(--transition), color var(--transition);

  &:focus,
  &:hover {
    border: 1px solid var(--white-fifty-color);
    color: var(--white-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    padding: 14px 23px;
    line-height: 1.56;
    width: 309px;
  }
`;
export const SubscribeText = styled.p`
  color: var(--white-color);
  font-weight: 400;
  line-height: 1.43;
  width: 335px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    width: 309px;
  }
`;

export const SubscribeButton = styled.button`
  width: 335px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.125;
  margin: 0 auto;
  padding: 18px;
  border: 1px solid var(--white-twenty-color);
  border-radius: 200px;
  color: var(--white-color);
  background-color: transparent;
  transition: transform var(--transition), border var(--transition), background-color var(--transition);

  &:focus,
  &:hover {
    border: 1px solid var(--white-fifty-color);
    color: var(--white-color);
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    width: 309px;
  }
`;
