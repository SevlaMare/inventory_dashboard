import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';
import { RootState } from './store';

export function Counter2() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter2.value);

  return (
    <div>
      <h1>Counter2: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
