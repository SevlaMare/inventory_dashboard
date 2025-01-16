import { useState } from 'react';
import { useSelector, useDispatch } from '../../redux/hook';

import { removeTodo, toggleTodo } from './todoSlice';
import { TodoForm } from './todoForm';
import { Todo } from './types';
import { styles } from './styles';

// edit fx
// TODO: write tests (test ids, auto rm from prod? eg data-testId={1})
// TODO: mock api calls + intercept x api dev
// TODO;' figout css lib (accessebility use on eletron)
// dif lv of permissions
export function TodoList() {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);

  const handleEdit = (item: Todo) => {
    console.log(item.id);
    setEditing(item);
  };

  const handleSave = (item: Todo) => {
    console.log('save', item);
    setEditing(false);
  };

  return (
    <div>
      {/* create todo form */}
      <TodoForm />

      {/* TODO: edit form | or use the list to direct edit */}

      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`animate-fadeIn ${styles.card} ${editing?.id == todo.id && 'border-red'}`}
          >
            <div>
              <span>{todo.title}</span>
              <span>{`${todo.completed}`}</span>
            </div>

            <div>
              <button onClick={() => dispatch(removeTodo(todo.id))}>-</button>

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
