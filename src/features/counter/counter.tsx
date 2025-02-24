// ------------------------------------
// demo to use redux RTK with undo/redo
// ------------------------------------
import { useSelector, useDispatch } from '../../redux/hook'; // get / set
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  selectCount,
} from './counterSlice';
import { ActionCreators } from 'redux-undo';

import { Btn } from '@/components/atoms/btn';
import { Title } from '@/components/atoms/title';

export function Counter() {
  // const [count, setCount] = useState(0);
  // setCount = is defined in the SLICER as initial state.
  // count equivalent, can be acessed by:
  // const count = useSelector(state => state.counter.present.counter); // Access the counter state
  const count = useSelector(selectCount); // Access the counter state
  const dispatch = useDispatch();
  const incrementAmount = 2;

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleReset = () => dispatch(reset());
  const handleIncrementByAmount = () =>
    dispatch(incrementByAmount(Number(incrementAmount) || 0));
  const handleRedo = () => dispatch(ActionCreators.redo());
  const handleUndo = () => dispatch(ActionCreators.undo());
  const handleCleanHis = () => dispatch(ActionCreators.clearHistory());

  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 border-solid border-2 m-2'>
      <Title name='Counter' />
      <div className='text-5xl font-semibold mb-4'>{count}</div>
      <div className='flex flex-col space-x-4'>
        <div>
          <Btn callback={handleIncrement} name='Increment' />
          <Btn callback={handleIncrementByAmount} name='IncrementBy' />
          <Btn callback={handleDecrement} name='Decrement' />
          <Btn callback={handleReset} name='Reset' />
        </div>

        <div className='mt-2'>
          <Title name='undo / redo' />
          <Btn callback={handleUndo} name='Undo' />
          <Btn callback={handleRedo} name='Redo' />
          <Btn callback={handleCleanHis} name='clean' />
        </div>
      </div>
    </div>
  );
}
