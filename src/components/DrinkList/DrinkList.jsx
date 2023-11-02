import React, { useEffect } from 'react';
import DrinkItem from 'components/DrinkItem/DrinkItem';
import { CardList } from './DrinkList.styled';
import { useDrink } from 'hooks/useDrink';

const DrinkList = ({ onPageChange, currentPage }) => {
  const { favoriteDrinks } = useDrink();

  console.log(currentPage);

  useEffect(() => {
    if (favoriteDrinks?.length === 0) {
      onPageChange(currentPage - 1);
    }
  }, [favoriteDrinks]);

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
