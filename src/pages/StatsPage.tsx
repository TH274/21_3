import Stats from '../components/Stats';
import { useTheme } from '../context/ThemeContext';

const StatsPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`page-container ${theme}`}>
      <div className="page-content">
        <div className="page-header">
          <h1 className="page-title">Task Statistics</h1>
          <button 
            onClick={toggleTheme}
            className="theme-toggle"
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'} Mode
          </button>
        </div>

        <Stats />
      </div>
    </div>
  );
};

export default StatsPage;
