import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// SLICEs
import { todoReducer } from '@/features/todo/todoSlice';
import { counterReducer } from '@/features/counter/counterSlice';
import { counterReducer2 } from '@/features/counter2/counterSlice';

// app config
import { reduxStoreKey } from '@/utils/constants';
import { getStorageItem, setStorageItem } from '@/service/localStorage';
import { Logger } from '@/service/logger';
// import { debounce } from '@/utils/debounce';

// undo
import undoable from 'redux-undo'; // high order reducer to track history

// rtk query slices resources
import { productApi } from '@/service/api/products';

// saga for async
import createSagaMiddleware from 'redux-saga';

// TODO: saga middleware setup for apis
const setupStore = () => {
  const undoConfig = { limit: 10 };
  const reducers = combineReducers({
    counter: undoable(counterReducer, undoConfig),
    todo: todoReducer,
    counter2: counterReducer2,
    [productApi.reducerPath]: productApi.reducer,
  });

  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: reducers,
    preloadedState: getStorageItem(reduxStoreKey), // fallback is intialState from reducers
    middleware: getDefaultMiddleware => {
      return (
        getDefaultMiddleware({ thunk: true })
          // .concat(sagaMiddleware)
          .concat(productApi.middleware)
      );
    },
  });

  // sagaMiddleware.run(rootSaga);

  return store;
};

export const store = setupStore();

// --------- autosave ---------
let timeoutId: NodeJS.Timeout | undefined;

function hasActiveTimeout(): boolean {
  return timeoutId !== undefined;
}

function clearExistingTimeout() {
  if (hasActiveTimeout()) {
    clearTimeout(timeoutId);
  }
}

function saveStateToStorage() {
  setStorageItem(reduxStoreKey, store.getState());
}

function handleAutoPersist() {
  clearExistingTimeout();
  // Set a new timeout to save the state after x ms of inactivity
  timeoutId = setTimeout(saveStateToStorage, 800);
}

// listener for action dispatch
store.subscribe(handleAutoPersist);

// ---------- track state change -------------
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
