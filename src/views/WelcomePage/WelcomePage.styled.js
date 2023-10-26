import styled from 'styled-components';

export const Conteiner = styled.div`
  color: #fafafa;
  max-width: 485px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const H2 = styled.h2`
  margin-bottom: 14px;
`;

export const P = styled.p`
  margin-bottom: 40px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export const DefButton = styled.button`
  background-color: transparent;
  color: #f3f3f3;
  padding: 18px 44px 18px 44px;
  border-radius: 42px;
  border: rgba(243, 243, 243, 0.2) solid 1px;
  &:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }
`;
