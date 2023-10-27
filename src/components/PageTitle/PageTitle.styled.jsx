import styled from "styled-components";

export const Title = styled.h1`
  /* font-weight: SemiBold; */
  font-size: 32px;
  margin-bottom: 40px;
  margin-top: 80px;

  @media screen and (min-width: 768px){
    margin-bottom: 60px;
  margin-top: 140px;
  font-size: 56px;
  }

  @media screen and (min-width: 1440px){
     margin-top: 160px;
     font-size: 64px;
  }
`;