import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://'; // додати, коли буде бек

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('users/signup', credentials);
      token.set(data.token); //глобально сетимо токен на подальші запити
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); //чи прописувати окремі відповіді на конкретні помилки, які прописані на бекенді?
    }
  }
);

const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('users/signIn', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const signOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    await axios.post('users/signOut');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    //якщо розлогінений і нема токену, то виходимо. thunkAPI.rejectWithValue();бо return вертає undefined і тоді помилки при рефрешЮзер
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch User');
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authOperations = {
  signUp,
  signIn,
  signOut,
  refreshUser,
};
