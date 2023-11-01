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
  width: 100%;
`;
const IngredientWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 100%;
    gap: 188px;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const IngredientInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
`;
export {
  CloseIconReactSvg,
  DrinkIngredientsWrapper,
  IngredientWrapper,
  TitleWrapper,
  IngredientInputsWrapper,
};
