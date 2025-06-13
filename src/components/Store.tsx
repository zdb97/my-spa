import React from "react";
import { useAppSelector } from "../store/hooks";

const Store: React.FC = () => {
  const { users, todos, currentUser } = useAppSelector((state) => state.app);

  return (
    <div className="store-container">
      <h1>Store data display</h1>
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
      </div>
    </div>
  );
};

export default Store;
