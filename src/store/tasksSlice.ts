import { createSlice } from '@reduxjs/toolkit';

export type Task = {
    id: string;
    title: string;
    description: string;
    date: Date;
    uid: string;
};

export type TaskState = {
    taskList: Array<Task>;
    showModal: {
        open: boolean;
        type: string;
        id?: string | null;
    };
};

const initialState: TaskState = {
    taskList: [],
    showModal: {
        open: false,
        type: '',
    },
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        clearState: (state) => initialState,
        setTaskList: (state, action) => {
            state.taskList = action.payload;
        },
        addTask: (state, action) => {
            // setTask({ id; 'éoid', title: 'hoje', description:'lalalalalalal', date:'2021-10-31'})
            state.taskList = [...state.taskList, action.payload];
        },
        setShowModal: (state, action) => {
            state.showModal = action.payload;
        },
    },
    extraReducers: {},
});

export const { clearState, setTaskList, addTask, setShowModal } = taskSlice.actions;
export default taskSlice.reducer;
