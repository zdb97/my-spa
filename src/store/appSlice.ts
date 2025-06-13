import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState, User, Todo } from "./types";

// Mock data
const mockUsers: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "user" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "user" },
];

const mockTodos: Todo[] = [
  { id: 1, title: "Learn React", completed: true, userId: 1 },
  { id: 2, title: "Learn Redux", completed: false, userId: 1 },
  { id: 3, title: "Build App", completed: false, userId: 2 },
  { id: 4, title: "Deploy App", completed: false, userId: 3 },
];

const initialState: AppState = {
  users: mockUsers,
  todos: mockTodos,
  currentUser: null,
  loading: false,
  error: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      console.log("Setting current user:", action.payload); // Debug log
      state.currentUser = action.payload;
    },
    addTodo: (state, action: PayloadAction<Omit<Todo, "id">>) => {
      const newTodo = {
        ...action.payload,
        id: Math.max(...state.todos.map((t) => t.id)) + 1,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCurrentUser, addTodo, toggleTodo, setLoading, setError } =
  appSlice.actions;

export default appSlice.reducer;
