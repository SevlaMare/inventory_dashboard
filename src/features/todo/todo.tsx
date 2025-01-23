import { useState } from 'react';
import { useSelector, useDispatch } from '../../redux/hook';

import { removeTodo, toggleTodo, updateTodo } from './todoSlice';
import { TodoForm } from './todoForm';
import { Todo } from './types';
import { styles } from './styles';

import { Input } from '@/components/input';

// RTK query works -> onQueryStarted  / patchResult.undo()
// TODO: optimistic state update?
export function TodoList() {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [editing, setEditing] = useState<Todo | false>(false);

  const handleEdit = (item: Todo) => {
    console.log('start editing', item.id);
    setName(item.title);
    setEditing(item);
  };

  const handleSave = (item: Todo) => {
    console.log('save', item, 'new name', name);
    dispatch(updateTodo({ ...item, title: name }));
    setEditing(false);
  };

  return (
    <div>
      <TodoForm />

      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`animate-fadeIn ${styles.card} ${editing?.id == todo.id && 'border-red'}`}
          >
            <div>
              {editing && todo.id == editing.id ? (
                <Input value={name} onChange={setName} />
              ) : (
                <span>{todo.title}</span>
              )}
              <span>{`${todo.completed}`}</span>
            </div>

            <div>
              <button onClick={() => dispatch(removeTodo(todo.id))}>del</button>

              <button onClick={() => dispatch(toggleTodo(todo.id))}>
                Toggle
              </button>

              {editing && editing.id == todo.id ? (
                <button onClick={() => handleSave(todo)}>Save</button>
              ) : (
                <button onClick={() => handleEdit(todo)}>Edit</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
