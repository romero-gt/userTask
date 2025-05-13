import { useContext, useRef, useState } from "react"
import { TaskContext } from "../context/TaskProvider";

const TaskForm = () => {
    const [title, setTitle] = useState("");
    const { addTask } = useContext(TaskContext);
    const inputRef = useRef();

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!title.trim()) return;

      addTask(title);
      setTitle("");
    }

    console.log(title);
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