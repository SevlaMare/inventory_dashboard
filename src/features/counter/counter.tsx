// ---------------------------
// template to use redux store
// ---------------------------
import { useSelector, useDispatch } from '../../redux/hook'; // get / set
import { increment, decrement, reset } from './counterSlice'; // ACTIONs

export function Counter() {
  // const [count, setCount] = useState(0);
  // setCount = is defined in the SLICER as initial state.
  // count equivalent, can be acessed by:
  const count = useSelector(state => state.counter.counter); // Access the counter state

  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleReset = () => dispatch(reset());

  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 border-solid border-2 m-2'>
      <Title name='Counter' />
      <div className='text-5xl font-semibold mb-4'>{count}</div>
      <div className='flex space-x-4'>
        <Btn callback={handleIncrement} name='Increment' />
        <Btn callback={handleDecrement} name='Decrement' />
        <Btn callback={handleReset} name='Reset' />
      </div>
    </div>
  );
}

interface BtnProps {
  name: string;
  callback: () => void;
}
interface TitleProps {
  name: string;
}

function Btn({ name, callback }: BtnProps) {
  return (
    <button
      onClick={callback}
      className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
    >
      {name}
    </button>
  );
}

function Title({ name }: TitleProps) {
  return <h1 className='text-3xl font-bold mb-4'>{name}</h1>;
}
