import { createSelector } from 'reselect';

const selectMainPageDrinksData = (state) => state.drinks.mainPageDrinks;
const selectIsLoadingData = (state) => state.drinks.isLoading;
const selectDrinksData = (state) => state.drinks.drinks;
const selectErrorDrinksData = (state) => state.drinks.error;
const selectFavoriteDrinksData = (state) => state.drinks.favoriteDrinks;
const selectTotalDrinksData = (state) => state.drinks.total;
const selectPopularDrinksData = (state) => state.drinks.popularDrinks;

export const selectMainPageDrinks = createSelector(
  [selectMainPageDrinksData],
  (mainPageDrinks) => mainPageDrinks
);

export const selectIsLoading = createSelector(
  [selectIsLoadingData],
  (isLoading) => isLoading
);

export const selectDrinks = createSelector(
  [selectDrinksData],
  (drinks) => drinks
);

export const selectErrorDrinks = createSelector(
  [selectErrorDrinksData],
  (error) => error
);

export const selectFavoriteDrinks = createSelector(
  [selectFavoriteDrinksData],
  (favoriteDrinks) => favoriteDrinks
);

export const selectTotalDrinks = createSelector(
  [selectTotalDrinksData],
  (total) => total
);

export const selectPopularDrinks = createSelector(
  [selectPopularDrinksData],
  (popularDrinks) => popularDrinks.slice(0, 4)
);

export const selectDrinkById = (drinkId) => (state) =>
  state.drinks.drinks.find((drink) => drink._id === drinkId);
