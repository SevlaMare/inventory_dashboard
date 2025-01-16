import { configureStore } from '@reduxjs/toolkit';

// regular slices
import { todoReducer } from '@/features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(
      // Add middlewares here
    );
  },
});