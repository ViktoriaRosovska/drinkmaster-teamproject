import React from 'react';
import DrinkItem from 'components/DrinkItem/DrinkItem';
import { CardList } from './DrinkList.styled';
// import { useDrink } from 'hooks/useDrink';

const DrinkList = ({ drinksData }) => {
  // const { favoriteDrinks } = useDrink();

  

  // useEffect(() => {
  //   if (favoriteDrinks?.length === 0) {
  //     onPageChange(currentPage - 1);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [favoriteDrinks]);

  return (
    <>
      <CardList>
        {drinksData.map(drink => {
          return <DrinkItem key={drink._id} drinkData={drink} />;
        })}
      </CardList>
    </>
  );
};

export default DrinkList;
