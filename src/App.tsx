import React, { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";
import "./styles/normalize.scss";
import "./styles/App.scss";

const RemoteApp = React.lazy(() => import("remote/RemoteApp"));
const UseMemo = React.lazy(() => import("remote/UseMemo"));
const UseCallback = React.lazy(() => import("remote/UseCallback"));
const UseCallback2 = React.lazy(() => import("remote/UseCallback2"));
const Abort = React.lazy(() => import("remote/Abort"));
const UseRef = React.lazy(() => import("remote/UseRef"));
const UseReducer = React.lazy(() => import("remote/UseReducer"));
const UseReducer2 = React.lazy(() => import("remote/UseReducer2"));

const AppContent = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <h1>SPA Host Application</h1>
      <nav className="app-nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/usememo">UseMemo Example</NavLink>
        <NavLink to="/usecallback">UseCallback Example</NavLink>
        <NavLink to="/usecallback2">UseCallback2 Example</NavLink>
        <NavLink to="/abort">Abort Example</NavLink>
        <NavLink to="/UseRef">UseRef Example</NavLink>
        <NavLink to="/useReducer">UseReducer Example</NavLink>
        <NavLink to="/useReducer2">UseReducer2 Example</NavLink>
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
                <RemoteApp onNavigate={(path: string) => navigate(path)} />
              }
            />
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
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

// Main App component that provides Router context
const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
