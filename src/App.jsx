import TaskForm from './components/TaskForm'
import './App.css'
import TaskList from './components/TaskList'

function App() {
  return (
    <div>
      <aside></aside>
      <main>
        <TaskForm />
        <TaskList />
      </main>
    </div>
  )
}

export default App
