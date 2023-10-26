import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 28px;

  @media screen and (min-width: 768px) {
    gap: 40px 20px;
  }

  @media screen and (min-width: 1440px) {
    gap: 80px 20px;
  }
`;
