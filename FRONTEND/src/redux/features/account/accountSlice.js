import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { login, register, logout } from './accountApi';

const API_URL = 'http://localhost:3000';

export const loginAccount = createAsyncThunk('users/login', async (args) => {
  try {
    const { email, password } = args;
    const response = await login(API_URL, email, password);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const registerAccount = createAsyncThunk(
  'users/signup',
  async (args) => {
    try {
      const { name, password, email } = args;
      const response = await register(API_URL, name, email, password);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

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
    register_success: false,
  },
  reducers: {
    resetRegisterSuccess(state) {
      state.register_success = false;
    },
  },
  extraReducers: {
    [loginAccount.pending]: (state) => {
      state.loading = true;
    },
    [loginAccount.fulfilled]: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      const { user } = action.payload;
      state.name = user.name;
      const { message } = action.payload;
      toast.success(message);
    },
    [loginAccount.rejected]: (state, action) => {
      state.loading = false;
      toast.error(action?.error?.message);
    },
    [registerAccount.pending]: (state) => {
      state.loading = true;
    },
    [registerAccount.fulfilled]: (state, action) => {
      state.loading = false;
      state.register_success = true;
      state.isLoggedIn = true;
      const { user } = action.payload;
      state.name = user.name;
      const { message } = action.payload;
      toast.success(message);
    },
    [registerAccount.rejected]: (state, action) => {
      state.loading = false;
      toast.error(action?.error?.message);
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

export const { resetRegisterSuccess } = accountSlice.actions;

export default accountSlice.reducer;
