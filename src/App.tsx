import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import './styles/index.css';

//  code splitting
const StatsPage = lazy(() => import("./pages/StatsPage"));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <nav className="app-nav">
            <div className="nav-logo">Task Manager</div>
            <div className="nav-links">
              <Link to="/tasks" className="nav-link">Tasks</Link>
              <Link to="/stats" className="nav-link">Stats</Link>
            </div>
          </nav>
          <main className="app-content">
            <Routes>
              <Route path="/" element={<Navigate to="/tasks" replace />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route
                path="/stats"
                element={
                  <Suspense fallback={<div className="loading-container">Loading stats...</div>}>
                    <StatsPage />
                  </Suspense>
                }
              />
              <Route path="*" element={<Navigate to="/tasks" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
