import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState, User, Todo } from "./types";

// Mock data
const mockUsers: User[] = [
  { id: 1, name: "John Doe", role: "admin" },
  { id: 2, name: "Jane Smith", role: "user" },
  { id: 3, name: "Bob Johnson", role: "user" },
];

const mockTodos: Todo[] = [
  { id: 1, title: "Learn React", completed: true, userId: 1 },
  { id: 2, title: "Learn Redux", completed: false, userId: 1 },
  { id: 3, title: "Build App", completed: false, userId: 2 },
  { id: 4, title: "Deploy App", completed: false, userId: 3 },
];

const initialState: AppState = {
  users: mockUsers,
  currentUser: null,
  todos: mockTodos,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { setUsers, setCurrentUser, setTodos, toggleTodo } =
  appSlice.actions;

export default appSlice.reducer;
