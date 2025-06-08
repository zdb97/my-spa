import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./styles/normalize.scss";
import "./styles/App.scss";

const RemoteApp = React.lazy(() => import("remote/RemoteApp"));
const UseMemo = React.lazy(() => import("remote/UseMemo"));
const UseCallback = React.lazy(() => import("remote/UseCallback"));
const UseCallback2 = React.lazy(() => import("remote/UseCallback2"));
const Abort = React.lazy(() => import("remote/Abort"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <h1>SPA Host Application</h1>
        <nav className="app-nav">
          <NavLink to="/" end style={{ marginRight: "20px" }}>
            Home
          </NavLink>
          <NavLink to="/usememo" style={{ marginRight: "20px" }}>
            UseMemo Example
          </NavLink>
          <NavLink to="/usecallback" style={{ marginRight: "20px" }}>
            UseCallback Example
          </NavLink>
          <NavLink to="/usecallback2" style={{ marginRight: "20px" }}>
            UseCallback2 Example
          </NavLink>
          <NavLink to="/abort">Abort Example</NavLink>
        </nav>
        <div className="content-container">
          <Suspense
            fallback={
              <div className="loading-fallback">Loading Component...</div>
            }
          >
            <Routes>
              <Route path="/" element={<RemoteApp />} />
              <Route path="/usememo" element={<UseMemo />} />
              <Route path="/usecallback" element={<UseCallback />} />
              <Route path="/usecallback2" element={<UseCallback2 />} />
              <Route path="/abort" element={<Abort />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
