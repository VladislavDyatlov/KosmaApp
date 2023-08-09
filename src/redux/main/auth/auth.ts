import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthPayload{
    username: string;
    isAuth: boolean;
    error: string
}

const initialState: AuthPayload = {
    username: localStorage.getItem('user') ?? '',
    isAuth: Boolean(localStorage.getItem('auth') ?? false),
    error: "",
}

interface AuthPayloads{
    username: string;
    isAuth: boolean;
} 

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login: (state, action: PayloadAction<AuthPayloads>) =>{
            state.username = action.payload.username;
            state.isAuth = Boolean(action.payload.isAuth);
            localStorage.setItem("auth", String(action.payload.isAuth))
            localStorage.setItem('user', String(action.payload.username))
        },
        errors: (state, action: PayloadAction<Error>) =>{
            state.error = action.payload.message
        },
        logout: (state) =>{
            state.username = ''
            state.isAuth = Boolean(localStorage.removeItem("auth"))
        }
    }
})

export const {login, errors} = AuthSlice.actions
export default AuthSlice.reducer