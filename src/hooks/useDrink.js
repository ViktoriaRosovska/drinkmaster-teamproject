import { useSelector } from 'react-redux';

import {
  selectMainPageDrinks,
  selectIsLoading,
  selectDrinks,
  selectDrinkById,
  selectErrorDrinks,
  selectTotalDrinks,
  selectFavoriteDrinks,
  selectPopularDrinks,
} from '../redux/drinks/drinksSelectors';

export const useDrink = () => {
  const mainPageDrinks = useSelector(selectMainPageDrinks);
  const isLoading = useSelector(selectIsLoading);
  const drinks = useSelector(selectDrinks);
  const drinkById = useSelector(selectDrinkById);
  const error = useSelector(selectErrorDrinks);
  const total = useSelector(selectTotalDrinks);
  const favoriteDrinks = useSelector(selectFavoriteDrinks);
  const popularDrinks = useSelector(selectPopularDrinks);

  return {
    mainPageDrinks,
    isLoading,
    drinks,
    drinkById,
    error,
    total,
    favoriteDrinks,
    popularDrinks,
  };
};
