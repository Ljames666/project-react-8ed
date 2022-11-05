import { createSlice } from '@reduxjs/toolkit';

export type User = {
    id: string;
    username: string;
    password: string;
    name: string;
    email: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    occupation?: string;
    role: string;
    active: boolean;
    createdDate: Date;
    updateDate: Date;
};

export type UserState = {
    loading: boolean;
    userList: Array<User>;
};

const initialState: UserState = {
    loading: false,
    userList: [
        {
            id: '31887742-2479-4097-a625-5eb3370337ff',
            username: 'Ljames',
            password: 'admin',
            name: 'Jamerson Paz',
            email: 'admin@admin.com',
            address: 'Logo ali',
            city: 'Santa Maris',
            state: 'RS',
            country: 'Brasil',
            occupation: 'Software Engineer',
            role: 'admin',
            active: true,
            createdDate: new Date(),
            updateDate: new Date(),
        },
    ],
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
    },
    extraReducers: {},
});

export const { clearState, setuser } = userSlice.actions;
export default userSlice.reducer;
