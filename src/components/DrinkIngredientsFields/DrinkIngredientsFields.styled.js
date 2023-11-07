import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

const CloseIconReactSvg = styled(ReactSVG)`
  width: 18px;
  height: 18px;
  color: ${props => props.theme.color};
  fill: ${props => props.theme.color};
  stroke: ${props => props.theme.color};
  & div svg {
    stroke: ${props => props.theme.color};
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
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

const MeasureInput = styled.input`
  width: 101px;
  height: 50px;
  border-radius: 200px;
  border: 1px solid ${props => props.theme.secondBorderColor};
  background-color: transparent;
  color: ${props => props.theme.color};
  padding-left: 18px;
  padding-right: 18px;
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 56px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 335px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

const IngredientInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
`;

const RelativeIngredientWrapper = styled.div`
  position: relative;
`;

const IngredientiMeasureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 8px;
`;
export {
  CloseIconReactSvg,
  DrinkIngredientsWrapper,
  IngredientWrapper,
  TitleWrapper,
  IngredientInputsWrapper,
  MeasureInput,
  RelativeIngredientWrapper,
  IngredientiMeasureWrapper,
};
