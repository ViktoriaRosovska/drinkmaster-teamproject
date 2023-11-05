import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PopularDrinksWrapper = styled.div`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 768px) {
    width: 313px;
  }
`;

export const PopularDrinksTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: ${props => props.theme.color};
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 40px;
  }
`;

export const PopularDrinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    // justify-content: space-between;
    gap: 32px;
    align-content: flex-start;
  }

  @media screen and (min-width: 1440px) {
    justify-content: center;
    flex-direction: column;
    gap: 28px;
  }
`;
export const PopularDrinksItem = styled.li`
  text-aline: center;
`;

export const PopularDrinksLink = styled(Link)`
  display: flex;
  gap: 14px;
  text-decoration: none;
  border-radius: 8px;
  transition: 0.5s;
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px #7fffd4;
  }
`;
export const PopularDrinksImg = styled.img`
  border-radius: 8px;
`;
export const PopularDrinksName = styled.h4`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color};
  line-height: 1.38;
  margin-bottom: 8px;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
`;

export const PopularDrinksInfo = styled.div`
  width: 232px;

  @media screen and (min-width: 1440px) {
    width: 209px;
  }
`;
export const PopularDrinksTxt = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  color: ${props => props.theme.secondaryTextColor};
    overflow: hidden;
  text-overflow: ellipsis;
    width: 232px;

  @media screen and (min-width: 1440px) {
    width: 209px;
  }
`;
