import { Field, Form as FormikForm } from 'formik';
import styled from 'styled-components';
import transition from '../../utils/transition';

export const SybscribeWrapper = styled(FormikForm)`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 309px;
  }
`;

export const SybscribeInput = styled(Field)`
  //   вилазить за контейнер, тому що контенери футера та мейн різні
  width: 100%;

  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   width: 335px;

  margin-bottom: 18px;
  padding: 18px 24px;
  border-radius: 200px;
  border: 1px solid var(--white-twenty-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  color: var(--white-fifty-color);
  background-color: transparent;
  transition: border ${transition};

  &:focus,
  &:hover {
    border: 1px solid var(--white-fifty-color);
    color: var(--white-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    padding: 14px 23px;
    line-height: 1.56;
    // якщо буде ширина 100%, то це прибрати
    // width: 309px;
  }
`;
export const SybscribeText = styled.p`
  color: var(--white-color);
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const SubscribeButton = styled.button`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.125;
  padding: 18px;
  border: 1px solid var(--white-twenty-color);
  border-radius: 200px;
  color: var(--white-color);
  background-color: transparent;
  transition: border ${transition}, background-color ${transition};

  &:focus,
  &:hover {
    border: 1px solid var(--white-fifty-color);
    color: var(--white-color);
    transform: scale(1.05);
  }
`;
