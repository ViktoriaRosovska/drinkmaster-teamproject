import React from 'react';
import DrinkList from 'components/DrinkList/DrinkList';
import PageTitle from 'components/PageTitle/PageTitle';
import Paginator from 'components/Paginator/Paginator';
import { MainContainer } from 'styles/App.styled';

export default function FavoriteDrinksPage() {
  return (
    <MainContainer>
      <PageTitle title="Favorites" />
      <DrinkList />
      <Paginator totalDrinks={63} drinksPerPage={9} />
    </MainContainer>
  );
}
