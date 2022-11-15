import { createSlice } from '@reduxjs/toolkit';

export type ConfigState = {
    loading: boolean;
    message: {
        code: number;
        status: 'success' | 'error' | 'warning' | 'underfined';
        text: string;
    };
    accessPermission: boolean;
    styledMode: 'light' | 'dark';
};

const initialState: ConfigState = {
    loading: false,
    message: {
        code: 200,
        status: 'underfined',
        text: '',
    },
    accessPermission: true,
    styledMode: 'light',
};

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        clearState: (state) => initialState,

        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
    },
    extraReducers: {},
});

export const { clearState, setLoading, setMessage } = configSlice.actions;
export default configSlice.reducer;
