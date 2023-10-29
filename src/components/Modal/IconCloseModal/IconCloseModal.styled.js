import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

const ReactSVGIcon = styled(ReactSVG)`
  width: 24px;
  height: 24px;
  border: none;
  stroke: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: scale 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
  &:hover {
    scale: 1.1;
  }
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export { ReactSVGIcon };
