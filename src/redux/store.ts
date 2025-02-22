import { configureStore } from '@reduxjs/toolkit';

// regular slices
import { todoReducer } from '@/features/todo/todoSlice';
import { counterReducer } from '@/features/counter/counterSlice';

export const store = configureStore({
  devTools: true,
  reducer: {
    todo: todoReducer,
    counter: counterReducer,
  },
  // preloadedState: loadState(),
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat
      // Add middlewares here
      ();
  },
});

// https://dev.to/igorovic/simplest-way-to-persist-redux-state-to-localstorage-e67
// https://stackblitz.com/edit/github-sp72vl?file=pages%2F_app.tsx,app%2Fstore.ts
