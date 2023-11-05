import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
    ingredient: { value: '', label: '' },
    category: { value: '', label: '' },
  },
  reducers: {
    setFilter(state, action) {
      return { ...state, filter: action.payload };
    },
    setIngredient(state, action) {
      if (action.payload === null) {
        return { ...state, ingredient: { value: '', label: '' } };
      }
      return { ...state, ingredient: action.payload };
    },
    setCategory(state, action) {
      if (action.payload === null) {
        return { ...state, category: { value: '', label: '' } };
      }
      return { ...state, category: action.payload };
    },
  },
});

export const { setFilter, setIngredient, setCategory } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
