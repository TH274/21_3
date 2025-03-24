import { memo, useCallback } from "react";
import { useTaskStore } from "../store/useTaskStore";
import { useTheme } from "../context/ThemeContext";

interface TaskItemProps {
  id: number;
  title: string;
  status: boolean;
}

const TaskItem = memo(({ id, title, status }: TaskItemProps) => {
  const { toggleTask, deleteTask } = useTaskStore();
  const { theme } = useTheme();

  const handleToggle = useCallback(() => {
    toggleTask(id);
  }, [id, toggleTask]);

  const handleDelete = useCallback(() => {
    deleteTask(id);
  }, [id, deleteTask]);

  return (
    <div className={`task-item ${theme}`}>
      <input 
        type="checkbox" 
        checked={status} 
        onChange={handleToggle} 
        className="task-checkbox"
      />
      <span className={`task-title ${status ? 'completed' : ''}`}>
        {title}
      </span>
      <button 
        onClick={handleDelete}
        className="task-delete"
      >
        ❌
      </button>
    </div>
  );
});

TaskItem.displayName = 'TaskItem';

export default TaskItem;