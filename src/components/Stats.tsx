import { useMemo } from "react";
import { useTaskStore } from "../store/useTaskStore";
import { useTheme } from "../context/ThemeContext";

const Stats = () => {
  const { task } = useTaskStore();
  const { theme } = useTheme();

  const totalTasks = useMemo(() => task.length, [task]);
  const completedTasks = useMemo(() => task.filter((t) => t.status).length, [task]);
  const pendingTasks = useMemo(() => task.filter((t) => !t.status).length, [task]);
  const completionRate = useMemo(() => 
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0, 
    [completedTasks, totalTasks]
  );

  return (
    <div className={`stats-container ${theme}`}>
      <h2>Task Statistics</h2>
      
      <div className="stats-grid">
        <div className="stats-card">
          <h3>Total Tasks</h3>
          <p className="stats-value">{totalTasks}</p>
        </div>
        
        <div className="stats-card">
          <h3>Completed</h3>
          <p className="stats-value">{completedTasks}</p>
        </div>
        
        <div className="stats-card">
          <h3>Pending</h3>
          <p className="stats-value">{pendingTasks}</p>
        </div>
        
        <div className="stats-card">
          <h3>Completion Rate</h3>
          <p className="stats-value">{completionRate}%</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-container">
        <h3>Progress</h3>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${completionRate}%` }}></div>
        </div>
        <p className="progress-text">
          {completionRate}% Complete
        </p>
      </div>
    </div>
  );
};

export default Stats;