import { createSlice } from '@reduxjs/toolkit';
import { getCategories, getGlasses, getIngredients } from './filtersOperations';
import { handlePending, handleRejected } from '../../hooks/handlers';
const initialState = {
  categories: '',
  ingredients: '',
  glasses: '',
  isLoading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getCategories.pending, handlePending)
      .addCase(getCategories.rejected, handleRejected)
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload.categories;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(getGlasses.pending, handlePending)
      .addCase(getGlasses.rejected, handleRejected)
      .addCase(getGlasses.fulfilled, (state, action) => {
        state.glasses = action.payload.glasses;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(getIngredients.pending, handlePending)
      .addCase(getIngredients.rejected, handleRejected)
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload.ingredients;
        state.isLoading = false;
        state.error = null;
      }),
});

export const filtersReducer = filtersSlice.reducer;
