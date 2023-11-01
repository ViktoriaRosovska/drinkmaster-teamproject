import { createSelector } from 'reselect';

const selectCategoriesData = state => state.filters.categories;
const selectIngredientsData = state => state.filters.ingredients;
const selectGlassesData = state => state.filters.glasses;

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
