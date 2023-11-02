import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterCopyrightWrapper = styled.div`
  padding-top: 80px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 153px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: space-between;
  }
`;

export const FooterText = styled.p`
  color: var(--white-fifty-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.333;
  letter-spacing: -0.24px;
  min-width: 242px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
export const FooterLinkInfo = styled.ul`
  padding-top: 8px;
  display: flex;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
    padding-top: 0px;
  }
`;

export const FooterLink = styled(Link)`
  color: var(--white-fifty-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.333;
  letter-spacing: -0.24px;
  transition: color var(--transition);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  &:hover,
  &:focus {
    color: var(--white-color);
    transform: scale(1.1);
  }
`;
