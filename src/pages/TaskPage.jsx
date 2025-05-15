import { Box, Button, Container, Skeleton } from '@mui/material';
import React, { useContext } from 'react'
import UserSwitcher from '../components/UserSwitcher';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { TaskContext } from '../context/TaskProvider';
import { AuthContext } from '../context/AuthProvider';

const TaskPage = () => {
    const { tasks } = useContext(TaskContext);
    const { logout, user } = useContext(AuthContext)

    return (
        <>
            <Box
                className="topbar"
                sx={{
                    backgroundColor: "#fff",
                    px: 4,
                    py: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Box>
                    {user && <strong>Bem vindo, {user?.firstName || user.userName} !</strong>}
                </Box>
                <Box>
                    <Button variant='outlined' color='error' onClick={logout}>
                        Logout
                    </Button>
                </Box>
            </Box>
            <Container>
                <Box
                    className="app-container"
                    sx={{
                        display: "flex",
                        gap: 4,
                        maxWidth: "1000px",
                        margin: "40px auto",
                        padding: "40px",
                        backgroundColor: "#fff",
                        borderRadius: "16px"
                    }}
                >
                    <Box>
                        <UserSwitcher />
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <TaskForm />
                        {tasks.length === 0 ? Array.from({ length: 2 }).map((_, i) => (
                            <Skeleton key={i} height={50} sx={{ mb: 2 }} />
                        ))
                            : <TaskList />}
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default TaskPage