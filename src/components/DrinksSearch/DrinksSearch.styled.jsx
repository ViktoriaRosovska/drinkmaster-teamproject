import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export const Filter = styled(DebounceInput)`
  width: auto;
  height: 56px;
  background-color: transparent;
  border-radius: 200px;
  border: 1px solid ${props => props.theme.borderColor};
  padding: 0 24px;

  color: ${props => props.theme.hoverBorderColor};
  font-size: 17px;
  opacity: 1;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.paginationAccentColor};
  }
  &::placeholder {
    color: ${props => props.theme.color};
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    width: 264px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
  }
`;
