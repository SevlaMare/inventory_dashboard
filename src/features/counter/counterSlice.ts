import { createSlice } from '@reduxjs/toolkit';

const defaultState = 0;

const initialState: { counter: number } = {
  counter: defaultState || 0,
};

const counterSlice = createSlice({
  name: 'counter', // slice id
  initialState,
  reducers: {
    increment: state => {
      state.counter += 1;
    },
    decrement: state => {
      state.counter -= 1;
    },
    reset: state => {
      state.counter = defaultState;
    },
  },
});

// Explicitly Export Actions
export const { increment, decrement, reset } = counterSlice.actions;

// Explicitly Export Reducers
export const counterReducer = counterSlice.reducer;
