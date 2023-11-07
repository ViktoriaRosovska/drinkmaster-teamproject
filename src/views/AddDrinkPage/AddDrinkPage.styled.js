import { PopularDrinksTitle } from 'components/PopularDrinks/PopularDrinks.styled';
import styled from 'styled-components';

const AddDrinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 94px;
  }
`;

const FollowUsTitle = styled(PopularDrinksTitle)``;

const RightWrapper = styled.div``;
export { AddDrinkContainer, RightWrapper, FollowUsTitle };
