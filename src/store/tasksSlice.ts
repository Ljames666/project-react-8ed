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
};

const initialState: TaskState = {
    taskList: [],
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        clearState: (state) => initialState,
        setTask: (state, action) => {
            // setTask({ id; 'éoid', title: 'hoje', description:'lalalalalalal', date:'2021-10-31'})
            state.taskList = [...state.taskList, action.payload];
        },
    },
    extraReducers: {},
});

export const { clearState, setTask } = taskSlice.actions;
export default taskSlice.reducer;
