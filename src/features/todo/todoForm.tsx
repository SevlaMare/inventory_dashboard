import { useState } from 'react';
import { useDispatch } from '../../redux/hook';
import { addTodo } from './todoSlice'; // an action

export function TodoForm() {
  const [title, setTitle] = useState<string>('');
  const dispatch = useDispatch();

  const handleValidations = () => {};

  const handleReset = () => {
    setTitle('');
  };

  const handlePersist = () => {
    // save on redux store
    dispatch(addTodo({ title }));

    // save on api
  };

  const handleSubmit = (e: FormSubmitEvent) => {
    e.preventDefault();

    // TODO: validations
    handlePersist();

    handleReset();
  };

  return (
    <form onSubmit={handleSubmit} data-testid='form'>
      <input
        type='text'
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder='Enter a new todo'
      />

      <button type='submit'>save</button>
    </form>
  );
}
