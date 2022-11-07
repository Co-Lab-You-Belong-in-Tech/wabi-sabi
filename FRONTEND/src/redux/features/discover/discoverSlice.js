import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './discoverAPI';

const API_URL = 'http://localhost:3000';

export const getPublicMemories = createAsyncThunk('discover/getPublicMemories', async () => {
  const response = await api.getPublicMemories(API_URL);
  return response;
});

export const getPublicMemory = createAsyncThunk('discover/getPublicMemory', async (id) => {
  const response = await api.getPublicMemory(API_URL, id);
  return response;
});

const initialState = {
  public_memories: [],
  loading: false,
};

export const memorySlice = createSlice({
  name: 'public memory',
  initialState,
  reducers: {},
  extraReducers: {
    [getPublicMemories.pending]: (state) => {
      state.loading = true;
    },
    [getPublicMemories.fulfilled]: (state, action) => {
      state.loading = false;
      state.memories = action.payload;
    },
    [getPublicMemories.rejected]: (state) => {
      state.loading = false;
    },
    [getPublicMemory.pending]: (state) => {
      state.loading = true;
    },
    [getPublicMemory.fulfilled]: (state, action) => {
      state.loading = false;
      state.memories = action.payload;
    },
    [getPublicMemory.rejected]: (state) => {
      state.loading = false;
    },

  },
});

export default memorySlice.reducer;
