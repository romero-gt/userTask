import { useContext } from 'react'
import { TaskContext } from '../context/TaskProvider'

const TaskItem = ({ task }) => {
    const { toggleTask, removeTask } = useContext(TaskContext);

    return (
        <li className="task-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task)}
            />
            <span className={task.completed ? "completed" : ""}>
                {task.title}
            </span>
            <button onClick={() => removeTask(task.id)}>
                🗑️
            </button>
        </li>
    )
}

export default TaskItem;