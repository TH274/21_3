import { useCallback } from 'react';
import { useTaskStore } from '../store/useTaskStore';

/**
 * Custom hook that provides memoized task actions
 * to prevent unnecessary re-renders
 */
export const useTaskActions = () => {
  const store = useTaskStore();

  return {
    toggleTask: useCallback(store.toggleTask, [store.toggleTask]),
    deleteTask: useCallback(store.deleteTask, [store.deleteTask]),
    addTask: useCallback(store.addTask, [store.addTask]),
    updateTask: useCallback(store.updateTask, [store.updateTask]),
    fetchTask: useCallback(store.fetchTask, [store.fetchTask])
  };
}; 