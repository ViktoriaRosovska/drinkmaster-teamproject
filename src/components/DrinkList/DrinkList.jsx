import React from 'react';
import DrinkItem from 'components/DrinkItem/DrinkItem';
import { CardList } from './DrinkList.styled';

const DrinkList = ({drinks}) => {

  return (
    <>
        <CardList>
          {drinks.map(drink => {
            return <DrinkItem key={drink._id} drinkData={drink} />;
          })}
        </CardList>
    </>
  );
};

export default DrinkList;
