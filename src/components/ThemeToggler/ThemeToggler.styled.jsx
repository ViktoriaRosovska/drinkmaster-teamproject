import { styled } from 'styled-components';

export const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border-color: ${props => props.theme};
  padding-top: 8px;
  padding-bottom: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
`;
