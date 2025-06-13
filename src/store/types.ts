export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export interface AppState {
  users: User[];
  todos: Todo[];
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}
