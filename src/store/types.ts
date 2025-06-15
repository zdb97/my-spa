export interface User {
  id: number;
  name: string;
  role: string;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export interface AppState {
  users: User[];
  currentUser: User | null;
  todos: Todo[];
}

export interface FormState {
  input: string;
  isValid: boolean;
  error: string | null;
}

export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}
