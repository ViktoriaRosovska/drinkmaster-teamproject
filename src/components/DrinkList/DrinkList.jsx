import React from 'react';
import DrinkItem from 'components/DrinkItem/DrinkItem';
import { CardList } from './DrinkList.styled';
import { useDrink } from 'hooks/useDrink';

const DrinkList = () => {
  const { favoriteDrinks } = useDrink();
  
  return (
    <>
        <CardList>
          {favoriteDrinks.map(drink => {
            return <DrinkItem key={drink._id} drinkData={drink} />;
          })}
        </CardList>
    </>
  );
};

export default DrinkList;
