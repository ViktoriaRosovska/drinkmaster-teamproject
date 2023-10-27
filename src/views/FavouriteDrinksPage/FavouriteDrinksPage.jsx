import React from 'react';
import DrinkList from 'components/DrinkList/DrinkList';
import PageTitle from 'components/PageTitle/PageTitle';
import { MainContainer } from 'styles/App.styled';

export const FavoriteDrinksPage = () => {
  return (
    <MainContainer>
      <PageTitle title="Favorites" />
      <DrinkList />
    </MainContainer>
  );
};
