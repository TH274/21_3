import { create } from 'zustand';
import axios from 'axios';

type Task = {
    id: number;
    title: string;
    status: boolean;
}

interface TaskState {
    task: Task[];
    isLoading: boolean;
    fetchTask: () => Promise<void>;
    addTask: (title: string) => Promise<void>;
    deleteTask: (id: number) => Promise<void>;
    toggleTask: (id: number) => Promise<void>;
    updateTask: (id: number, updates: Partial<Task>) => Promise<void>;
}

// Use relative URL in production (Vercel) and localhost in development
const API_URL = process.env.NODE_ENV === 'production' 
    ? '/api' 
    : 'http://localhost:5000';

export const useTaskStore = create<TaskState>((set) => ({
    task: [],
    isLoading: false,
    
    fetchTask: async () => {
        set({ isLoading: true });
        try {
            const res = await axios.get(`${API_URL}/tasks`);
            set({ task: res.data, isLoading: false });
        } catch (error) {
            console.error('Error fetching tasks:', error);
            set({ isLoading: false });
        }
    },

    addTask: async (title) => {
        set({ isLoading: true });
        try {
            const newTask = { title, status: false };
            const res = await axios.post(`${API_URL}/tasks`, newTask);
            set((state) => ({ 
                task: [...state.task, res.data],
                isLoading: false
            }));
        } catch (error) {
            console.error('Error adding task:', error);
            set({ isLoading: false });
        }
    },

    toggleTask: async (id) => {
        try {
            const currentTask = await axios.get(`${API_URL}/tasks/${id}`);
            const updatedTask = { ...currentTask.data, status: !currentTask.data.status };
            await axios.put(`${API_URL}/tasks/${id}`, updatedTask);
            set((state) => ({ 
                task: state.task.map((t) => 
                    t.id === id ? { ...t, status: !t.status } : t
                )
            }));
        } catch (error) {
            console.error('Error toggling task:', error);
        }
    },
    updateTask: async (id, updates) => {
        try {
            const currentTask = await axios.get(`${API_URL}/tasks/${id}`);
            const updatedTask = { ...currentTask.data, ...updates };
            await axios.put(`${API_URL}/tasks/${id}`, updatedTask);
            set((state) => ({ 
                task: state.task.map((t) => 
                    t.id === id ? { ...t, ...updates } : t
                )
            }));
        } catch (error) {
            console.error('Error updating task:', error);
        }
    },
    deleteTask: async (id) => {
        try {
            await axios.delete(`${API_URL}/tasks/${id}`);
            set((state) => ({ 
                task: state.task.filter((t) => t.id !== id)
            }));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    },
}))