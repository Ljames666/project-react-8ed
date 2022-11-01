import { createSlice } from '@reduxjs/toolkit';

export type TaskState = {
    loading: boolean;
    taskList: Array<{
        id: string;
        title: string;
        description: string;
        date: Date;
    }>;
};

const initialState: TaskState = {
    loading: false,
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
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
    extraReducers: {},
});

export const { clearState, setTask } = taskSLice.actions;
export default taskSlice.reducer;
