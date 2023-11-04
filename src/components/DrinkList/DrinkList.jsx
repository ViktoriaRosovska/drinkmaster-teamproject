import React from 'react';
import DrinkItem from 'components/DrinkItem/DrinkItem';
import { CardList } from './DrinkList.styled';

const DrinkList = ({ drinksData, favorite }) => {
  return (
    <>
      <CardList>
        {drinksData.map(drink => {
          return (
            <DrinkItem key={drink._id} drinkData={drink} favorite={favorite} />
          );
        })}
      </CardList>
    </>
  );
};

export default DrinkList;
