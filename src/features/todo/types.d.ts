// ts: array of acceptable string values
export type TodoStatus = 'completed' | 'in-progress' | 'not-started';

export interface Todo {
  id: string;
  title: string;
  completed?: boolean; // ts optional
  description?: string;
  dueDate?: Date;
  status?: TodoStatus;
}

// ts: can't be modified direct, so readonly
export interface TodosState {
  readonly todos: readonly Todo[];
}
