import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://drink-master-app.onrender.com/api/';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signup', credentials);
      token.set(data.token); //глобально сетимо токен на подальші запити
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); //чи прописувати окремі відповіді на конкретні помилки, які прописані на бекенді?
    }
  }
);

const signIn = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signin', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const signOut = createAsyncThunk('auth/signout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/signout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch User');
    }

    token.set(token);

    try {
      const res = await axios.get('/users/current');

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const subscribeEmail = createAsyncThunk(
  '/auth/subscribe',
  async (data, thunkAPI) => {
    try {
      await axios.post('/users/subscribe', data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authOperations = {
  signUp,
  signIn,
  signOut,
  currentUser,
  subscribeEmail,
};
