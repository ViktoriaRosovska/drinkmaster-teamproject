import styled from 'styled-components';
import Select from 'react-select';

export const IngredientSelect = styled(Select)`
  padding: 0;
  width: 200px;
  height: 50px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
  border: none;
  background: 'transparent';
  color: ${props => props.theme.color};
  border-color: ${props => props.theme.color};
  @media screen and (min-width: 768px) {
    font-size: 17px;
    width: 332px;
    height: 56px;
  }
`;
