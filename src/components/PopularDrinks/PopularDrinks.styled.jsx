import styled from "styled-components";

export const PopularDrinksWrapper = styled.div`
width: 335px;

@media screen and (min-width: 768px) {
    width: 704px;
  }

@media screen and (min-width: 768px) {
    width: 313px;
  }
`

export const PopularDrinksTitle = styled.h3`
font-weight: 500;
font-size: 18px;
line-height: 1.33;
color: ${props => props.theme};
margin-bottom: 28px;

@media screen and (min-width: 768px) {
    ont-size: 24px;
    margin-bottom: 40px;
  }

`

export const PopularDrinksList = styled.ul`

`