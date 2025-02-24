import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux/types';

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
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
  },
});

// when warping with undo/erdo .counter, becomes .present.counter
// export the selector, to type it, and centralize the path
export const selectCount = (state: RootState) => state.counter.present.counter;

// Explicitly Export ACTIONs
// to be used inside the dispatchers (since many actions can have same name, manual import).
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

// Explicitly Export REDUCERs
// to be injected in the redux store (can be on different levels in the application).
export const counterReducer = counterSlice.reducer;
