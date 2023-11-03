import styled from 'styled-components';

export const RecipePreparationTitle = styled.h2`
  color: ${({ theme }) => theme.mainText};
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  margin-top: 80px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`;

export const RecipePreparationDescription = styled.p`
  color: ${({ theme }) => theme.mainText};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.285;
  margin-top: 40px;
  margin-bottom: 0;
  overflow-wrap: break-word;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`;

export const RecipePreparationImage = styled.img`
  width: 100%;
  height: 430px;
  object-fit: cover;
  margin-top: 40px;
  border-radius: 10px;

  @media screen and (min-width: 1440px) {
    margin: 0;
    height: 480px;
    min-width: 631px;
  }
`;

export const RecipePreparationWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 60px;
    margin-top: 60px;
    justify-content: flex-end;
  }
`;