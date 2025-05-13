import { useContext } from 'react'
import { TaskContext } from '../context/TaskProvider'
import TaskItem from './TaskItem';

const TaskList = () => {
    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0) return <p>✅ Nenhuma tarefa no momento!</p>;

    return (
        <ul className="task-list">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    )
}

export default TaskList