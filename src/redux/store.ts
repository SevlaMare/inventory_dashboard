import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// slices
import { todoReducer } from '@/features/todo/todoSlice';
import { counterReducer } from '@/features/counter/counterSlice';

import { reduxStoreKey } from '@/utils/constants';
import { getStorageItem, setStorageItem } from '@/service/localStorage';

import { Logger } from '@/service/logger';

// import { debounce } from '@/utils/debounce';

const reducers = combineReducers({
  todo: todoReducer,
  counter: counterReducer,
});

export const store = configureStore({
  devTools: true,
  reducer: reducers,
  preloadedState: getStorageItem(reduxStoreKey), // fallback is intialState from reducers
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat
      // Add middlewares here
      ();
  },
});

// action dispatch listener.
store.subscribe(() => {
  // TODO: debounce: reset on every action dispatch, will save only after x ms of inactivity.
  setStorageItem(reduxStoreKey, store.getState());
});

// ---------- debug -------------
function toObservable(store) {
  return {
    subscribe({ onNext }) {
      const dispose = store.subscribe(() => onNext(store.getState()));
      onNext(store.getState());
      return { dispose };
    },
  };
}

const observable = toObservable(store);
observable.subscribe({
  onNext: state => {
    // action is dispatched
    Logger('New state:', state, null);
  },
});
