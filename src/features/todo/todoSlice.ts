import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodosState } from './types';
import { v4 as uuidv4 } from 'uuid';

// TODO: local storage retrival try
const mockTodos = [
  { id: '1', title: 'api call', completed: false },
  { id: '2', title: 'persist on local storage', completed: false },
  { id: '3', title: 'undo feature', completed: false },
];

const initialState: TodosState = {
  todos: mockTodos || [],
};

const todoSlice = createSlice({
  name: 'todos', // slice id
  initialState,
  reducers: {
    // ts: omit says that a required attribute "id" is not required here (due default value).
    addTodo: (state, action: PayloadAction<Omit<Todo, 'id'>>) => {
      const newTodo: Todo = {
        id: uuidv4(),
        completed: false, // default value
        ...action.payload,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(
        todo => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
  },
});

// Explicitly Export Actions
export const { addTodo, removeTodo, toggleTodo, updateTodo } =
  todoSlice.actions;

// Explicitly Export Reducers
export const todoReducer = todoSlice.reducer;
