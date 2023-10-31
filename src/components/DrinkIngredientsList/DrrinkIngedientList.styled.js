import styled from 'styled-components';
export const Title = styled.h2`
  opacity: 50%;
  font-size: 16px;
  line-height: calc(20 / 16);
  font-weight: 500;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(157px, 1fr));
  gap: 21px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    gap: 22px;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }

  @media screen and (min-width: 1440px) {
    gap: 35px;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    margin-bottom: 100px;
  }
`;
export const Image = styled.img`
  width: 157px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    width: 220px;
    margin-bottom: 14px;
  }
`;
export const Ingredient = styled.div`
  display: flex;
  justify-content: space-between;
  width: 157px;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`;
export const IngredientTitle = styled.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`;
export const IngredientMeasure = styled.p`
  opacity: 50%;
  font-size: 14px;
  line-height: calc(18 / 14);
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(20 / 16);
  }
`;
