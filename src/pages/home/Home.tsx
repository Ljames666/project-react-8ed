import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { StateApp } from '../../store/rootReducer';

import ModalInput from './components/modal-input-task/ModalInputTask';
import ListTask from './components/list-task/ListsTask';
import { setShowModal, Task } from '../../store/tasksSlice';
import { setUserLogon } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MyHome = styled(Box)(({ theme }) => ({
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    color: '#0079c6',
    textShadow: `1px 1px 2px #fff`,
    padding: 5,
}));

function Home(): JSX.Element {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userLogon } = useSelector((state: StateApp) => state.user);
    const { showModal, taskList } = useSelector((state: StateApp) => state.task);

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        if (taskList.length) {
            const myTasks = taskList.filter((i) => i.uid === userLogon?.id);
            if (myTasks.length) {
                setTasks(myTasks);
            }
        }
    }, [taskList]);

    const handleClick = () => dispatch(setShowModal({ open: true, type: 'New Task' }));
    const handleExit = () => {
        dispatch(setUserLogon(null));
        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    return (
        <>
            <MyHome>
                <Box>
                    <Typography variant="h3">
                        Welcome to your TaskList {userLogon?.username}
                    </Typography>
                </Box>
                <Box sx={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <Button onClick={handleClick} variant="contained" color="warning">
                        New Task
                    </Button>
                    <Button onClick={handleExit} variant="contained" color="error">
                        Logout
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {taskList.length ? (
                        <ListTask data={tasks} />
                    ) : (
                        <Typography variant="h4">Create your first task</Typography>
                    )}
                </Box>
            </MyHome>
            <ModalInput open={showModal.open} />
        </>
    );
}
export default Home;
