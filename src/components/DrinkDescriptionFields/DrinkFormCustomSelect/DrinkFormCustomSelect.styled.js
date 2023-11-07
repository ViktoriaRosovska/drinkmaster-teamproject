import styled from 'styled-components';
import Select from 'react-select';

export const AddFormSelect = styled(Select)`
  padding: 0;
  width: 100%;
  height: 34px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
  border: none;
  background: 'transparent';
  color: ${props => props.theme.color};
`;
