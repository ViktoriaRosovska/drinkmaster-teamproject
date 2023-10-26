import styled from 'styled-components';

export const Card = styled.li`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 18px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const DrinkName = styled.h2`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;

  @media screen and (min-width: 768px){
    font-size: 24px;
    line-height: 32px;
  }
`;

export const IsAlco = styled.p`
  margin-bottom: 18px;
  color: var(--white-fifty-color);
  font-size: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 16px;
  }
`;

export const Description = styled.p`
  width: 100%;
  height: 75px;
  margin-bottom: 18px;
  overflow: hidden;
  font-size: 14px;
  line-height: 18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;

  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    height: 110px;
    -webkit-line-clamp: 5;
    font-size: 16px;
    line-height: 22px;
  }

  @media screen and (min-width: 1440px) {
    height: 92px;
    -webkit-line-clamp: 4;
  }
`;

export const SeeMoreBtn = styled.button`
  min-width: 143px;
  border-radius: 42px;
  padding: 14px 40px;
  margin-right: 8px;
  font-weight: 600;
  font-size: 14px;
`;
