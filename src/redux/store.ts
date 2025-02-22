import { configureStore } from '@reduxjs/toolkit';

// regular slices
import { todoReducer } from '@/features/todo/todoSlice';
import { counterReducer } from '@/features/counter/counterSlice';

import { getStorageItem } from '@/service/localStorage';
import { reduxStoreKey } from '@/utils/constants';

export const store = configureStore({
  devTools: true,
  reducer: {
    todo: todoReducer,
    counter: counterReducer,
  },
  preloadedState: getStorageItem(reduxStoreKey), // fallback is intialState from reducer
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat
      // Add middlewares here
      ();
  },
});

// ----------tests
// function toObservable(store) {
//   return {
//     subscribe({ onNext }) {
//       const dispose = store.subscribe(() => onNext(store.getState()));
//       onNext(store.getState());
//       return { dispose };
//     },
//   };
// }

// // listener to persist state on every action dispatch
// store.subscribe(
//   setStorageItem()
//   debounce(() => {
//     saveState(store.getState());
//   }, 800)
// );

// const observable = toObservable(store);

// observable.subscribe({
//   onNext: state => {
//     console.log('New state:', state);
//   },
// });
