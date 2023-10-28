import { useSelector } from 'react-redux';

import {
  selectMainPageDrinks,
  // selectIsLoading,
  // selectDrinks,
  // selectErrorDrinks,
  // selectTotalDrinks,
  // selectFavoriteDrinks,
  // selectPopularDrinks,
} from './drinksSelectors';

export const useDrink = () => {
  const mainPageDrinks = useSelector(selectMainPageDrinks);
  // const isLoading = useSelector(selectIsLoading);
  // const drinks = useSelector(selectDrinks);
  // const error = useSelector(selectErrorDrinks);
  // const total = useSelector(selectTotalDrinks);
  // const favoriteDrinks = useSelector(selectFavoriteDrinks);
  // const popularDrinks = useSelector(selectPopularDrinks);

  return {
    mainPageDrinks,
    // isLoading,
    // drinks,
    // error,
    // total,
    // favoriteDrinks,
    // popularDrinks,
  };
};
