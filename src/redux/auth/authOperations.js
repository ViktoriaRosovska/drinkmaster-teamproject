import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { instance } from '../../api/instance';

axios.defaults.baseURL = 'https://drink-master-app.onrender.com/api/';
const authHeaderToken = {
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
      authHeaderToken.set(data.token); //глобально сетимо токен на подальші запити
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
      authHeaderToken.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const signOut = createAsyncThunk('auth/signout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/signout');
    authHeaderToken.unset();
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

    authHeaderToken.set(token);

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

const themeThunk = createAsyncThunk(
  'auth/theme',
  async (payload, { rejectWithValue }) => {
    console.log(payload);
    try {
      const res = await axios.patch('/users/theme', payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const authOperations = {
  signUp,
  signIn,
  signOut,
  currentUser,
  subscribeEmail,
  themeThunk,
};
