import styled from 'styled-components';

export const PagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  padding-top: 14px;
  padding-bottom: 14px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const NumberContainer = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const NumberButton = styled.button`
  background-color: transparent;
  color: var(--white-color);
  font-weight: 500;
  font-size: 12px;
  width: 27px;
  height: 27px;
  border-radius: 50%;

  /* transition: background-color 0.25s ease-in; */

  &:hover {
    background-color: var(--blue-fifty-color);
  }
`;
