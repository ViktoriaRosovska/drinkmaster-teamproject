import React from 'react';
import DrinkList from 'components/DrinkList/DrinkList';
import PageTitle from 'components/PageTitle/PageTitle';
import { MainContainer } from 'styles/App.styled';

export const MyDrinksPage = () => {
  return (
    <MainContainer>
      <PageTitle title="My drinks" />
      <DrinkList/> 
    </MainContainer>
  );
};
