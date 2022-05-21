import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getRandomGreeting from '../api/apiHelper';

const initialState = '';

export const getGreeting = createAsyncThunk('hotels', async () => {
  const response = await getRandomGreeting();
  return response.data;
});

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getGreeting.fulfilled,
      (state, action) => action.payload.greeting,
    );
  },
});

// Action creators are generated for each case reducer function
export const { greeting } = greetingSlice.actions;

export default greetingSlice.reducer;
