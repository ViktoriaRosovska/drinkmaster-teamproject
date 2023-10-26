import React from 'react';
import PageTitle from 'components/PageTitle/PageTitle';
import DrinkPageHero from 'components/DrinkPageHero/DrinkPageHero';
import DrinkIngridientList from 'components/DrinkIngredientsList/DrinkIngridientsList';

import { MainContainer } from 'styles/App.styled';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';

const DrinkIdPage = () => {
  return (
    <MainContainer>
      <PageTitle title="name of cocktaile" />
      <DrinkPageHero />
      <DrinkIngridientList />
      <RecipePreparation />
    </MainContainer>
  );
};

export default DrinkIdPage;
