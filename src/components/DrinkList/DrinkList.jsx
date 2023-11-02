import React from 'react';
import DrinkItem from 'components/DrinkItem/DrinkItem';
import { CardList } from './DrinkList.styled';
import NotFound from 'components/NotFound/NotFound';

const DrinkList = ({drinks}) => {

  return (
    <>
      {drinks.length > 0 ? (
        <CardList>
          {drinks.map(drink => {
            return <DrinkItem key={drink._id} drinkData={drink} />;
          })}
        </CardList>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default DrinkList;
