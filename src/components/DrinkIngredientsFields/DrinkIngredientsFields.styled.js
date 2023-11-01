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

const IngredientsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 8px;
  align-content: center;
`;
export { CloseIconReactSvg, IngredientsWrapper };
