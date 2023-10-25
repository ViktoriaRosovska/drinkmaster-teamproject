import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '', avatarURL: '', id: '' },
    token: null,
    //     isLoggedIn: false,
    //     isRefreshing: false,
    //     error: null,
    //   },
    //     extraReducers: builder => {
    //         builder....
  },
});

export const authReducer = authSlice.reducer;
