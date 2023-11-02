import styled from 'styled-components';

export const PrivacyContainer = styled.div`
  min-width: 320px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1240px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const PrivacyPolicyText = styled.p`
  color: var(--white-fifty-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.333;
  letter-spacing: -0.24px;
  text-indent: 5px;
`;

export const PrivacyPolicyTitle = styled.h2`
  color: var(--white-color);
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
`;
