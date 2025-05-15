import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import { useContext } from 'react'
import TaskPage from './pages/TaskPage';
import { AuthContext } from './context/AuthProvider';
import { CircularProgress } from '@mui/material';

function App() {
  const { user, loading } = useContext(AuthContext);

  if(loading) return <CircularProgress />

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/tasks' element={user ? <TaskPage /> : <Navigate to="/" replace/>}/>
    </Routes>
  )
}

export default App
