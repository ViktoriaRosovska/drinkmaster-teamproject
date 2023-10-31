import styled from 'styled-components';

export const RecipeTitle = styled.h2`
  font-size: 28px;
  line-height: calc(32 / 28);
  font-weight: 500;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 60px;
  }
`;
