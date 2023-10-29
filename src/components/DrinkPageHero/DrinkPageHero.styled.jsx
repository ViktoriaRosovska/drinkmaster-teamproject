import styled from 'styled-components';

export const HeroContainer = styled.div`
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
  }
`;
export const GlassName = styled.p`
  margin-bottom: 20px;
  font-size: 12px;
  opacity: 50%;
  line-height: calc(14 / 12);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(20 / 16);
  }

  /* @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  } */
`;
export const About = styled.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(22 / 16);
  }
  @media screen and (min-width: 1440px) {
    width: 593px;
  }
`;

export const ImageDrink = styled.img`
  width: 335px;
  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    position: relative;
    top: -50px;
  }
`;
export const DefaultImage = styled.div`
  width: 335px;
  height: 400px;
  background-color: grey;
  opacity: 50%;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;
