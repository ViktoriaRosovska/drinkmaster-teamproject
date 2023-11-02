import styled from 'styled-components';
// export const IngredientPhotoWrapper = styled.div`
//   width: 100%;
//   /* max-width: 158px; */
//   padding: 25px;
//   border-radius: 8px;
//   background-color: ${({ theme }) => theme.drinkPageIngredientBg};

//   @media screen and (min-width: 768px) {
//     height: 220px;
//     padding: 31px;
//   }
// `;
export const IngredientPhoto = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
  }
`;
export const Image = styled.img`
  width: 157px;
  margin-bottom: 8px;
  border-radius: 8px;
  overflow: hidden;

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
