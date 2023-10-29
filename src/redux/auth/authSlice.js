import { createSlice } from '@reduxjs/toolkit';

import { authOperations } from './authOperations';

const initialState = {
  user: { name: '', email: '', birthDate: '', avatarURL: '' },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(authOperations.signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.signOut.fulfilled, state => {
        state.user = { name: '', email: '', birthDate: '' };
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(authOperations.signOut.rejected, state => {
        state.user = { name: '', email: '', birthDate: '' };
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(authOperations.refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(authOperations.refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
