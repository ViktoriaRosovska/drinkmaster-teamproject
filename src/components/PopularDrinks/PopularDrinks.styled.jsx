import styled from "styled-components";
import { Link } from 'react-router-dom';

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
export const PopularDrinksItem = styled.li`

`

export const PopularDrinksLink = styled(Link)`

`
export const PopularDrinksImg = styled.img`

`
export const PopularDrinksNoImg = styled.img`

`

export const PopularDrinksName = styled.h4`

`

export const PopularDrinksInfo = styled.div`

`
export const PopularDrinksTxt = styled.p`

`