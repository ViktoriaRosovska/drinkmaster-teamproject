import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

const QuantityIngredients = styled.div`
  width: 104px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
`;

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 34px;
`;

const QuantityBtn = styled.button`
  background-color: transparent;
  /* border: 1px solid red; */
  border: none;
  border-radius: 200px 0 0 200px;
  width: 40px;
  height: 38px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuantityBtnMirror = styled(QuantityBtn)`
  transform: rotate(180deg);
`;

const QuantityText = styled.span`
  letter-spacing: 0em;
  text-align: center;
  width: 20px;
  text-align: center;
`;
const QuantityIconReactSvg = styled(ReactSVG)`
  width: 16px;
  height: 16px;
  & div svg {
    stroke: var(--white-color);
  }
`;
export {
  QuantityText,
  QuantityBtnMirror,
  QuantityBtn,
  QuantityContainer,
  QuantityIngredients,
  QuantityIconReactSvg,
};
