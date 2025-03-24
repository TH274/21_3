import { useEffect, useState, useCallback, memo } from 'react';
import { useTaskStore } from '../store/useTaskStore';
import TaskItem from './TaskItem';
import { useTheme } from '../context/ThemeContext';

const TaskList = memo(() => {
  const { task, fetchTask, addTask, isLoading } = useTaskStore();
  const { theme } = useTheme();
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    fetchTask();
    return () => {
    };
  }, [fetchTask]);

  const handleAddTask = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      await addTask(newTaskTitle);
      setNewTaskTitle('');
    }
  }, [addTask, newTaskTitle]);

  return (
    <div className={`task-list ${theme}`}>
      <h2 className="task-list-title">Task List</h2>

      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add a new task..."
          className="task-input"
        />
        <button
          type="submit"
          className="task-button"
        >
          Add
        </button>
      </form>

      {isLoading ? (
        <p>Loading tasks...</p>
      ) : task.length === 0 ? (
        <p>No tasks available. Add a task!</p>
      ) : (
        <div>
          {task.map((t) => (
            <TaskItem
              key={t.id}
              id={t.id}
              title={t.title.toString()}
              status={t.status}
            />
          ))}
        </div>
      )}
    </div>
  );
});

TaskList.displayName = 'TaskList';

export default TaskList;