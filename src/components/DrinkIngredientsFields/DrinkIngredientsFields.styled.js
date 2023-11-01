import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

const CloseIconReactSvg = styled(ReactSVG)`
  width: 18px;
  height: 18px;

  & div svg {
    /* stroke: var(--white-color); */
    stroke: red;
  }
`;

const DrinkIngredientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 8px;
  align-content: center;
  margin-bottom: 80px;
`;
const IngredientWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
export {
  CloseIconReactSvg,
  DrinkIngredientsWrapper,
  IngredientWrapper,
  TitleWrapper,
};
