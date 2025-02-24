import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// slices
import { todoReducer } from '@/features/todo/todoSlice';
import { counterReducer } from '@/features/counter/counterSlice';

// app config
import { reduxStoreKey } from '@/utils/constants';
import { getStorageItem, setStorageItem } from '@/service/localStorage';
import { Logger } from '@/service/logger';
// import { debounce } from '@/utils/debounce';

// undo
import undoable from 'redux-undo'; // high order reducer to track history

// saga for async
import createSagaMiddleware from 'redux-saga';

// TODO: saga middleware setup for apis
const setupStore = () => {
  const undoConfig = { limit: 10 };
  const reducers = combineReducers({
    counter: undoable(counterReducer, undoConfig),
    todo: todoReducer,
  });

  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: reducers,
    preloadedState: getStorageItem(reduxStoreKey), // fallback is intialState from reducers
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
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
