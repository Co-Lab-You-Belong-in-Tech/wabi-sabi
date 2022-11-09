import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './memoryAPI';

const API_URL = 'http://localhost:3000';

export const getAllMemories = createAsyncThunk(
  'memory/getAllMemories',
  async () => {
    const response = await api.getAllMemories(API_URL);
    return response;
  }
);

export const getMemory = createAsyncThunk('memory/getMemory', async (id) => {
  const response = await api.getMemory(API_URL, id);
  return response;
});

export const CreateMemory = createAsyncThunk(
  'memory/CreateMemory',
  async (memory) => {
    const response = await api.CreateMemory(API_URL, memory);
    return response;
  }
);

export const UpdateMemory = createAsyncThunk(
  'memory/UpdateMemory',
  async ({ formData: memory, id }) => {
    const response = await api.UpdateMemory(API_URL, id, memory);
    return response;
  }
);

const initialState = {
  memories: [],
  loading: false,
};

export const memorySlice = createSlice({
  name: 'memory',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllMemories.pending]: (state) => {
      state.loading = true;
    },
    [getAllMemories.fulfilled]: (state, action) => {
      state.loading = false;
      state.memories = action.payload;
    },
    [getAllMemories.rejected]: (state) => {
      state.loading = false;
    },
    [getMemory.pending]: (state) => {
      state.loading = true;
    },
    [getMemory.fulfilled]: (state, action) => {
      state.loading = false;
      state.memories = action.payload;
    },
    [getMemory.rejected]: (state) => {
      state.loading = false;
    },
    [CreateMemory.pending]: (state) => {
      state.loading = true;
    },
    [CreateMemory.fulfilled]: (state, action) => {
      state.loading = false;
      state.memories = action.payload;
    },
    [CreateMemory.rejected]: (state) => {
      state.loading = false;
    },
    [UpdateMemory.pending]: (state) => {
      state.loading = true;
    },
    [UpdateMemory.fulfilled]: (state) => {
      state.loading = false;
    },
    [UpdateMemory.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default memorySlice.reducer;
