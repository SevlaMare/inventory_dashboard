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

// Explicitly Export ACTIONs
// to be used inside the dispatchers (since many actions can have same name, manual import).
export const { increment, decrement, reset } = counterSlice.actions;

// Explicitly Export REDUCERs
// to be injected in the redux store (can be on different levels in the application).
export const counterReducer = counterSlice.reducer;
