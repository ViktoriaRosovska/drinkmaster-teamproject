// import { createSelector } from '@reduxjs/toolkit';

export const selectMainPageDrinks = (state) => state.drinks.mainPageDrinks;
export const selectIsLoading = (state) => state.drinks.isLoading;
export const selectDrinks = (state) => state.drinks.drinks;
export const selectErrorDrinks = (state) => state.drinks.error;

export const selectDrinkById = (drinkId) => (state) =>
  state.drinks.drinks.find((drink) => drink._id === drinkId);

export const selectFavoriteDrinks = (state) => state.drinks.favoriteDrinks;
export const selectTotalDrinks = (state) => state.drinks.total;
export const selectPopularDrinks = (state) => state.drinks.popularDrinks.slice(0, 4);
