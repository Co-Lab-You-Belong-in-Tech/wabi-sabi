import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, register, logout } from './accountApi';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:3000'

export const loginAccount = createAsyncThunk('users/login', async (args) => {
  const { email, password } = args;
  const response = await login(API_URL, email, password);
  return response;
});

export const registerAccount = createAsyncThunk('users/signup', async (args) => {
  const { name, password, email } = args;
  const response = await register(API_URL, name, email, password);
  return response;
});

export const logoutAccount = createAsyncThunk('users/logout', async () => {
  const response = await logout(API_URL);
  return response;
});

export const accountSlice = createSlice({
  name: 'users',
  initialState: {
    name: null,
    isLoggedIn: false,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [loginAccount.pending]: (state) => {
      state.loading = true;
    },
    [loginAccount.fulfilled]: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      const { user } = action.payload;
      state.name = user.name.split(' ')[0];
      const { message } = action.payload;
      toast.success(message);
    },
    [loginAccount.rejected]: (state) => {
      state.loading = false;
      const message = 'Something went wrong';
      toast.error(message);
    },
    [registerAccount.pending]: (state) => {
      state.loading = true;
    },
    [registerAccount.fulfilled]: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      const { user } = action.payload;
      state.name = user.name.split(' ')[0];
      const { message } = action.payload;
      toast.success(message);
    },
    [registerAccount.rejected]: (state) => {
      state.loading = false;
      const message = 'Something went wrong';
      toast.error(message);
    },
    [logoutAccount.pending]: (state) => {
      state.loading = true;
    },
    [logoutAccount.fulfilled]: (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.name = null;
      state.register_success = false;
      const { message } = action.payload;
      toast.success(message);
    },
    [logoutAccount.rejected]: (state) => {
      state.loading = false;
      const message = 'Something went wrong';
      toast.error(message);
    },
  },
});

export default accountSlice.reducer;
