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
