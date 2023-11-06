import { createSlice } from '@reduxjs/toolkit';

import { authOperations } from './authOperations';

const initialState = {
  user: { name: '', email: '', birthDate: '', avatarURL: '' },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isSubscribed: false,
  theme: 'dark',
  userAuth: null,
  userFavorite: null,
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
        state.theme = payload.user.theme;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        console.log(state.token);
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
      .addCase(authOperations.currentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.currentUser.fulfilled, (state, { payload }) => {
        state.theme = payload.user.theme;
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.userAuth = payload.user.userAuth;
        state.userFavorite = payload.user.userFavorite;
      })
      .addCase(authOperations.currentUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(authOperations.subscribeEmail.fulfilled, state => {
        state.isSubscribed = true;
      })
      .addCase(authOperations.themeThunk.fulfilled, (state, { payload }) => {
        state.theme = payload.subscribeUser.theme;
      })
      .addCase(authOperations.updateUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        payload.avatarURL && (state.user.avatarURL = payload.avatarURL);
      }),
});

export const authReducer = authSlice.reducer;
