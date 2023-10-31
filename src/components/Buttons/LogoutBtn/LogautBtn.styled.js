import styled from 'styled-components';

export const Logout = styled.button`
  width: 100%;
  height: 42px;
  padding: 12px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 42px;
  background-color: #f3f3f3;
  color: #161f37;
  transition: background-color 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96),
    color 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96),
    border 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
  &:hover {
    border: 1px solid #f3f3f333;
    background-color: transparent;
    color: #f3f3f3;
  }
`;
