import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  color: var(--start-page-txt-color);
  max-width: 485px;
  margin-left: 100px;
  position: relative;
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

export const DefButton = styled(Link)`
  background-color: transparent;
  color: var(--white-color);
  padding: 18px 44px 18px 44px;
  border-radius: 42px;
  border: rgba(243, 243, 243, 0.2) solid 1px;
  &:hover {
    background-color: var(--white-color);
    color: var(--dark-blue-color);
  }
`;
