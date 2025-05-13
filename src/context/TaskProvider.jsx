import { createContext, useEffect, useState } from 'react'
import axios from '../service/api.js'

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [user, setUser] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [userId, setUserId] = useState("1");

    useEffect(() => {
        async function fetchUserAndTask() {
            const userRes = await axios.get(`/users/${userId}`);
            setUser(userRes.data);
    
            const taskRes = await axios.get(`/tasks?userId=${userId}`);
            setTasks(taskRes.data);
        }
        fetchUserAndTask();
    }, [userId]);

    const addTask = async (title) => {
        const response = await axios.post("/tasks", {
            title,
            completed: false,
            userId
        });
        setTasks(prev => [...prev, response.data])
    }

    const toggleTask = async (task) => {
        const updated = { ...task, completed: !task.completed };
        await axios.patch(`/tasks/${task.id}`, { completed: updated.completed });
        setTasks(prev => prev.map(t => (t.id === task.id ? updated: t)));
    }

    const removeTask = async (id) => {
        await axios.delete(`tasks/${id}`);
        setTasks(prev => prev.filter(t => t.id !== id));
    }

    return (
        <TaskContext.Provider value={{user, tasks, setUserId, addTask, toggleTask, removeTask}}>
            {children}
        </TaskContext.Provider>
    );
}
