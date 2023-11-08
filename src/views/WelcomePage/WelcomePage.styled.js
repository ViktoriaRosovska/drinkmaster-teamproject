import styled from 'styled-components';
import { Link } from 'react-router-dom';
import transition from '../../utils/transition';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: var(--start-page-txt-color);
  position: relative;
  max-width: 335px;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    max-width: 470px;
    margin-left: 64px;
    align-items: start;
  }

  @media screen and (min-width: 1440px) {
    max-width: 485px;
    margin-left: 100px;
    align-items: start;
  }
`;

export const H2 = styled.h2`
  margin-bottom: 14px;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`;

export const P = styled.p`
  margin-bottom: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 14px;
`;

export const DefButton = styled(Link)`
  background-color: transparent;
  color: var(--white-color);
  padding: 18px 44px 18px 44px;
  border-radius: 42px;
  text-decoration: none;
  border: rgba(243, 243, 243, 0.2) solid 1px;
  transition: background-color ${transition}, color ${transition};
  &:hover {
    background-color: var(--white-color);
    color: var(--dark-blue-color);
  }
`;

export const ActiveBut = styled(DefButton)`
  background-color: var(--white-color);
  color: var(--dark-blue-color);
`;
