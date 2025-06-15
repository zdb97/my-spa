import React from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { setCurrentUser, toggleTodo } from "../store/appSlice";

const Store: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, todos, currentUser } = useAppSelector((state) => state.app);

  const handleLogin = () => {
    if (users.length > 0) {
      dispatch(setCurrentUser(users[0]));
    }
  };

  const handleLogout = () => {
    dispatch(setCurrentUser(null));
  };

  return (
    <div className="store-container">
      <h1>Store Data Display</h1>

      <div className="stats-section">
        <h2>Application Statistics</h2>
        <ul>
          <li>Total Users: {users.length}</li>
          <li>Total Todos: {todos.length}</li>
          <li>
            Completed Todos: {todos.filter((todo) => todo.completed).length}
          </li>
          <li>
            Pending Todos: {todos.filter((todo) => !todo.completed).length}
          </li>
        </ul>
      </div>

      <div className="current-user-section">
        <h2>Current User Status</h2>
        <p>
          {currentUser
            ? `Logged in as: ${currentUser.name} (${currentUser.role})`
            : "No user logged in"}
        </p>
        <button onClick={handleLogin} disabled={!users.length || !!currentUser}>
          Login
        </button>
        <button onClick={handleLogout} disabled={!currentUser}>
          Logout
        </button>
      </div>

      <div className="todos-section">
        <h2>Todos</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Store;
