// @ts-nocheck
import { Modal, Box, Typography, TextField, Button, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { StateApp } from '../../../../store/rootReducer';
import { addTask, setShowModal, setTaskList, Task } from '../../../../store/tasksSlice';
import { deleteTaskById } from '../../utils/appUtils';
type Props = {
    open: boolean;
};

function ModalInput({ open }: Props) {
    const dispatch = useDispatch();
    const { userLogon } = useSelector((state: StateApp) => state.user);
    const { showModal, taskList } = useSelector((state: StateApp) => state.task);

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [task, setTask] = useState<string>('');

    useEffect(() => {
        if (showModal.id) setTask(showModal.id);
    }, [showModal]);

    const handleClose = () => dispatch(setShowModal({ open: false, type: '' }));
    const handleSend = () => {
        const taskTemp: Partial<Task> = {
            id: v4(),
            title,
            description,
            date: new Date(),
            uid: userLogon?.id,
        };
        dispatch(addTask(taskTemp));
        dispatch(setShowModal({ open: false, type: '' }));
        setTitle('');
        setDescription('');
    };

    const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('e----', e);
        const newTitle =
            e.target.offsetParent.childNodes[2].childNodes[0].childNodes[1].childNodes[1]
                .childNodes[0];

        const newDescription =
            e.target.offsetParent.childNodes[2].childNodes[0].childNodes[2].childNodes[1]
                .childNodes[0];

        const arraytemp = taskList.map((i) => i);
        const index = taskList.findIndex((i) => i.id === task);

        if (index < 0) {
            dispatch(setShowModal({ open: false, type: '' }));
            throw new Error('deu ruim');
        }
        const edit = {
            id: arraytemp[index].id,
            title: newTitle.value,
            description: newDescription.value,
            date: new Date(),
            uid: arraytemp[index].uid,
        };

        arraytemp.splice(index, 1, edit);

        dispatch(setTaskList(arraytemp));
        dispatch(setShowModal({ open: false, type: '' }));
    };

    const handleDelete = () => {
        dispatch(setTaskList(deleteTaskById(task, taskList)));
        dispatch(setShowModal({ open: false, type: '' }));
    };
    return (
        <Box
            sx={{
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {showModal.type === 'New Task' && (
                <Modal
                    open={open}
                    onClose={handleClose}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Paper elevation={12}>
                        <Box
                            sx={{
                                width: 500,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                padding: 5,
                            }}
                        >
                            <Typography variant="h5">{showModal.type}</Typography>

                            <TextField
                                fullWidth
                                label="Title"
                                variant="standard"
                                color="info"
                                focused
                                value={title}
                                sx={{ marginTop: 2 }}
                                onChange={(e) => setTitle(e.target.value)}
                            />

                            <TextField
                                fullWidth
                                label="Description"
                                variant="standard"
                                color="info"
                                focused
                                value={description}
                                sx={{ marginTop: 2 }}
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    marginTop: 2,
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="inherit"
                                    sx={{ marginRight: 2 }}
                                    onClick={handleClose}
                                >
                                    Cancel
                                </Button>
                                <Button variant="contained" onClick={handleSend}>
                                    Send
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Modal>
            )}
            {showModal.type === 'Update Task' && (
                <Modal
                    open={open}
                    onClose={handleClose}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Paper elevation={12}>
                        <Box
                            sx={{
                                width: 500,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                padding: 5,
                            }}
                        >
                            <Typography variant="h5">{showModal.type}</Typography>

                            <TextField
                                fullWidth
                                label="Title"
                                variant="standard"
                                color="info"
                                focused
                                value={title}
                                sx={{ marginTop: 2 }}
                                onChange={(e) => setTitle(e.target.value)}
                            />

                            <TextField
                                fullWidth
                                label="Description"
                                variant="standard"
                                color="info"
                                focused
                                value={description}
                                sx={{ marginTop: 2 }}
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    marginTop: 2,
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="inherit"
                                    sx={{ marginRight: 2 }}
                                    onClick={handleClose}
                                >
                                    Cancel
                                </Button>
                                <Button variant="contained" onClick={(e) => handleUpdate(e)}>
                                    Update
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Modal>
            )}
            {showModal.type === 'Delete Task' && (
                <Modal
                    open={open}
                    onClose={handleClose}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Paper elevation={12}>
                        <Box
                            sx={{
                                width: 500,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                padding: 5,
                            }}
                        >
                            <Typography variant="h5">{showModal.type}</Typography>
                            <Typography>
                                By confirming that your task will be permanently deleted, and it is
                                impossible to reverse this action!
                            </Typography>
                            <Typography>Do you really want to confirm action?</Typography>

                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    marginTop: 2,
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="inherit"
                                    sx={{ marginRight: 2 }}
                                    onClick={handleClose}
                                >
                                    Cancel
                                </Button>
                                <Button variant="contained" onClick={(e) => handleDelete(e)}>
                                    Confirm
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Modal>
            )}
        </Box>
    );
}
export default ModalInput;
