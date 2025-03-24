import TaskList from '../components/TaskList';
import { useTheme } from '../context/ThemeContext';

const TasksPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`page-container ${theme}`}>
      <div className="page-content">
        <div className="page-header">
          <h1 className="page-title">Task Manager</h1>
          <button 
            onClick={toggleTheme}
            className="theme-toggle"
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'} Mode
          </button>
        </div>

        <TaskList />
      </div>
    </div>
  );
};

export default TasksPage;
