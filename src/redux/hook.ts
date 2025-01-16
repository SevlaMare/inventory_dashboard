import {
  type TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';

import { type AppDispatch, type RootState } from './types';

// type safe the redux hook
// dependency inversion principle. why? single point of interrection with react/redux.
export const useDispatch: () => AppDispatch = useReduxDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

// main point: wont need import the rootstate every time
