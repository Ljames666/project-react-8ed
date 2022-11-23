import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doPost } from '../service/apiService';
import { setMessage } from './configSlice';

export type User = {
    id?: string;
    username: string;
    password: string;
    email: string;
    createdDate?: Date;
    updateDate?: Date;
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

// TODO: os thunks são para chamadas assincronas do backend não será utilizado por enquanto

// export const postCadastro = createAsyncThunk(
//     'cadastro/post',
//     async ({ username, password, email }: User, { dispatch }) => {
//         const response = await doPost('cadastro', { username, password, email });
//         console.log('cadastro', response);

//         dispatch(setMessage(response));

//         return response;
//     }
// );

// export const postLogin = createAsyncThunk(
//     'login/post',
//     async ({ email, password }: Partial<User>, { dispatch }) => {
//         const response = await doPost('login', { email, password });
//         console.log('cadastro', response);

//         return response;
//     }
// );

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
    extraReducers: {
        // @ts-ignore
        // [postLogin.fulfilled]: (state, action) => {
        //     state.userLogon = action.payload;
        // },
    },
});

export const { clearState, setuser, setUserLogon } = userSlice.actions;
export default userSlice.reducer;
