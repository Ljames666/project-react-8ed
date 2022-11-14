import { createSlice } from '@reduxjs/toolkit';

export type User = {
    id: string;
    username: string;
    password: string;
    email: string;
    createdDate: Date;
    updateDate: Date;
};

export type UserState = {
    loading: boolean;
    userList: Array<User>;
    userLogon: Partial<User> | null;
};

const initialState: UserState = {
    loading: false,
    userList: [
        {
            id: '31887742-2479-4097-a625-5eb3370337ff',
            username: 'Ljames',
            password: 'admin',
            email: 'admin@admin.com',
            createdDate: new Date(),
            updateDate: new Date(),
        },
    ],
    userLogon: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearState: (state) => initialState,
        setuser: (state, action) => {
            // setuser({ id; 'éoid', title: 'hoje', description:'lalalalalalal', date:'2021-10-31'})
            state.userList = [...state.userList, action.payload];
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUserLogon: (state, action) => {
            state.userLogon = action.payload;
        },
    },
    extraReducers: {},
});

export const { clearState, setuser, setUserLogon } = userSlice.actions;
export default userSlice.reducer;
