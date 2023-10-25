import React from 'react';
import DrinkList from 'components/DrinkList/DrinkList';
import PageTitle from 'components/PageTitle/PageTitle';

export const FavoriteDrinksPage = () => {
  return (
    <div>
      <PageTitle title='Favorites'/>
    <DrinkList/>
    </div>
  );
};
