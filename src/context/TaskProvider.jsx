import { createContext, useEffect, useState } from 'react'
import axios from '../service/api.js'

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [user, setUser] = useState(null);
    const [task, setTask] = useState([]);
    const [userId, setUserId] = useState("1");

    useEffect(() => {
        async function fetchUserAndTask() {
            const userRes = await axios.get(`/users/${userId}`);
            setUser(userRes.data);
    
            const taskRes = await axios.get(`/tasks?userId=${userId}`);
            setTask(taskRes.data);
        }
        fetchUserAndTask();
    }, [userId]);

    const addTask = async (title) => {
        const response = await axios.post("/tasks", {
            title,
            completed: false,
            userId
        });
        setTask(prev => [...prev, response.data])
    }

    return (
        <TaskContext.Provider value={{addTask}}>
            {children}
        </TaskContext.Provider>
    );
}
