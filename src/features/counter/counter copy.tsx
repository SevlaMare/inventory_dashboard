import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 border-solid border-2 m-2'>
      <h1 className='text-3xl font-bold mb-4'>Counter</h1>
      <div className='text-5xl font-semibold mb-4'>{count}</div>
      <div className='flex space-x-4'>
        <button
          onClick={increment}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition'
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition'
        >
          Reset
        </button>
      </div>
    </div>
  );
}
