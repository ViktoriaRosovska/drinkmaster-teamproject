import styled from 'styled-components';

export const IngredientPhoto = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
  }
`;
export const ImageBox = styled.div`
  margin-top: 20px;
  margin-bottom: 8px;
  border-radius: 8px;
  width: 157px;
  height: 157px;
  padding: 25px;
  // background-color:  var(--blue-color);

  @media (min-width: 768px) {
    width: 220px;
    /* height: 220px; */
    padding: 22px;
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
  padding-top: 14px;
  display: flex;
  justify-content: space-between;
  max-width: 157px;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`;
export const IngredientTitle = styled.p`
  margin-bottom: 0;
  margin-right: 4px;
  font-size: 12px;
  color: ${props => props.theme.color};

  @media screen and (min-width: 768px) {
    width: 150px;
    font-size: 16px;
  }
`;

export const IngredientMeasure = styled.p`
  margin-bottom: 0;
  color: ${props => props.theme.secondaryTextColor};
  font-size: 14px;
  line-height: 1.29;
  text-align: end;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;
