import { useContext, useEffect, useRef, useState } from "react"
import { TaskContext } from "../context/TaskProvider";

const TaskForm = () => {
    const [title, setTitle] = useState("");
    const { addTask } = useContext(TaskContext);
    const inputRef = useRef();

    useEffect(() => inputRef.current.focus(), []);

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!title.trim()) return;

      addTask(title);
      setTitle("");
    }

  return (
    <form onClick={handleSubmit} className="task-form">
        <input
            ref={inputRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite uma tarefa"
        />
        <button type="submit">Adicionar</button>
    </form>
  )
}

export default TaskForm;