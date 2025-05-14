import TaskForm from './components/TaskForm'
import './App.css'
import TaskList from './components/TaskList'
import UserSwitcher from './components/UserSwitcher'

function App() {
  return (
    <div>
      <aside>
        <UserSwitcher />
      </aside>
      <main>
        <TaskForm />
        <TaskList />
      </main>
    </div>
  )
}

export default App
