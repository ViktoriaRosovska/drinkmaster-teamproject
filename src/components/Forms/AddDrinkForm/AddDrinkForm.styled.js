import styled from 'styled-components';

import { ReactSVG } from 'react-svg';

const QuantityIconReactSvg = styled(ReactSVG)`
  width: 16px;
  height: 16px;
  & div svg {
    stroke: var(--white-color);
  }
`;

const CloseIconReactSvg = styled(ReactSVG)`
  width: 18px;
  height: 18px;

  & div svg {
    /* stroke: var(--white-color); */
    stroke: red;
  }
`;

const AddFormSelectContainer = styled.div`
  height: 34px;
  position: relative;
`;

const AddFormTextarea = styled.textarea`
  border-radius: 14px;
  border: 1px solid var(--white-fifty-color);
  background-color: transparent;
  margin-bottom: 20px;
  width: 335px;
  height: 184px;
  &::placeholder {
    color: var(--white-color);
    line-height: calc(14px / 18px);
  }
`;

const AddIngredientsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--white-color);
  background-color: transparent;
  border-radius: 200px;
  opacity: 0.8;
  width: 104px;
  height: 38px;
`;

const SubTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;

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

const AddIngedientSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export {
  AddFormSelectContainer,
  AddFormTextarea,
  CloseIconReactSvg,
  QuantityBtnMirror,
  QuantityBtn,
  QuantityContainer,
  SubTitle,
  QuantityText,
  AddIngedientSelect,
  AddIngredientsContainer,
  QuantityIngredients,
  QuantityIconReactSvg,
};
