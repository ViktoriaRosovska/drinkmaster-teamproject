import { createSelector } from 'reselect';

const selectCategoriesData = state => state.filters.categories;
const selectIngredientsData = state => state.filters.ingredients;
const selectGlassesData = state => state.filters.glasses;
const selectIsLoadingData = state => state.filters.isLoading;
const selectErrorDrinksData = state => state.filters.error;

export const selectCategories = createSelector(
  [selectCategoriesData],
  categories => categories
);

export const selectIngredients = createSelector(
  [selectIngredientsData],
  ingredients => ingredients
);

export const selectGlasses = createSelector(
  [selectGlassesData],
  glasses => glasses
);

export const selectIsLoading = createSelector(
  [selectIsLoadingData],
  isLoading => isLoading
);

export const selectErrorDrinks = createSelector(
  [selectErrorDrinksData],
  error => error
);
