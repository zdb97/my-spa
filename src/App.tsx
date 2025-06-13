import React, { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Store from "./components/Store";
import "./styles/normalize.scss";
import "./styles/App.scss";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { setCurrentUser } from "./store/appSlice";

const RemoteApp = React.lazy(() => import("remote/RemoteApp"));
const UseMemo = React.lazy(() => import("remote/UseMemo"));
const UseCallback = React.lazy(() => import("remote/UseCallback"));
const UseCallback2 = React.lazy(() => import("remote/UseCallback2"));
const Abort = React.lazy(() => import("remote/Abort"));
const UseRef = React.lazy(() => import("remote/UseRef"));
const UseReducer = React.lazy(() => import("remote/UseReducer"));
const UseReducer2 = React.lazy(() => import("remote/UseReducer2"));

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { users, currentUser } = useAppSelector((state) => state.app);

  return (
    <div className="app-container">
      <h1>SPA Host Application</h1>
      <nav className="app-nav">
        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/usememo">UseMemo Example</NavLink>
          <NavLink to="/usecallback">UseCallback Example</NavLink>
          <NavLink to="/usecallback2">UseCallback2 Example</NavLink>
          <NavLink to="/abort">Abort Example</NavLink>
          <NavLink to="/UseRef">UseRef Example</NavLink>
          <NavLink to="/useReducer">UseReducer Example</NavLink>
          <NavLink to="/useReducer2">UseReducer2 Example</NavLink>
        </div>
        <div className="user-section">
          {currentUser ? (
            <div>
              <button onClick={() => dispatch(setCurrentUser(null))}>
                Logout
              </button>
              <div>
                {currentUser.name} ({currentUser.role})
              </div>
            </div>
          ) : (
            <button onClick={() => dispatch(setCurrentUser(users[0]))}>
              Login
            </button>
          )}
        </div>
      </nav>
      <div className="content-container">
        <Suspense
          fallback={
            <div className="loading-fallback">Loading Component...</div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <RemoteApp
                  onNavigate={(path: string) => navigate(path)}
                  users={useAppSelector((state) => state.app.users)}
                  todos={useAppSelector((state) => state.app.todos)}
                  currentUser={useAppSelector((state) => state.app.currentUser)}
                />
              }
            />
            <Route path="/store" element={<Store />} />
            <Route
              path="/usememo"
              element={
                <UseMemo onNavigate={(path: string) => navigate(path)} />
              }
            />
            <Route
              path="/usecallback"
              element={
                <UseCallback onNavigate={(path: string) => navigate(path)} />
              }
            />
            <Route
              path="/usecallback2"
              element={
                <UseCallback2 onNavigate={(path: string) => navigate(path)} />
              }
            />
            <Route
              path="/abort"
              element={<Abort onNavigate={(path: string) => navigate(path)} />}
            />
            <Route
              path="/useRef"
              element={<UseRef onNavigate={(path: string) => navigate(path)} />}
            />
            <Route
              path="/useReducer"
              element={
                <UseReducer onNavigate={(path: string) => navigate(path)} />
              }
            />
            <Route
              path="/useReducer2"
              element={
                <UseReducer2 onNavigate={(path: string) => navigate(path)} />
              }
            />
            <Route path="*" element={<>404 Not Found</>} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

// Main App component that provides Router context
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
