import styled from "styled-components";

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: 335px;
  gap: 40px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px)and (max-width: 1439px) {
    grid-template-columns: 342px 342px;
    gap: 80px 20px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 400px 400px 400px;
  }
`;

