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

  const renderInput = () => <Input value={name} onChange={setName} />;

  const renderTitle = title => <span>{title}</span>;

  return (
    <div>
      <TodoForm />

      <ul>
        {todos.map(todo => {
          const { title, id, completed } = todo;
          const isEditing = editing && id == editing.id;

          return (
            <li
              key={todo.id}
              className={`animate-fadeIn ${styles.card} ${editing?.id == todo.id && 'border-red'}`}
            >
              <div>
                {isEditing ? renderInput() : renderTitle(title)}
                <span>{`${completed}`}</span>
              </div>

              <div>
                <button onClick={() => dispatch(removeTodo(id))}>del</button>
                <button onClick={() => dispatch(toggleTodo(id))}>Toggle</button>

                {isEditing ? (
                  <button onClick={() => handleSave(todo)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(todo)}>Edit</button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
