import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export const Filter = styled(DebounceInput)`
  width: auto;
  height: 56px;
  background-color: transparent;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  padding: 0 24px;

  color: #f3f3f3;
  font-size: 17px;

  &:focus {
    outline: none;
    border-color: white;
  }
  &::placeholder {
    color: white;
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

  @media screen and (min-width: 1440px) {
  }
`;
