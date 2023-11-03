import styled from 'styled-components';

const HomePageContainer = styled.div`
  min-width: 320px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 185px;
    padding-bottom: 140px;
  }
`;

export { HomePageContainer };
