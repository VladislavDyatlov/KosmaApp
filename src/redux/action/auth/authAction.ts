import {Dispatch} from '@reduxjs/toolkit'
import axios from 'axios'
import { AppDispatch } from '../..'
import { AuthActions } from '../../../model/MarsAction'
import { AuthSlice } from '../../main/auth/auth'

export const authAction = (username: string, password: string) =>{
    return async (dispatch: AppDispatch) =>{
        try{
            const response = await axios.get<AuthActions[]>('./authApi.json')
            const userLog = response.data.find(user => user.username === username && user.password === password)
            if(userLog){
                dispatch(AuthSlice.actions.login({username: userLog.username, isAuth: true}))
            }

        }catch(err){
            dispatch(AuthSlice.actions.errors(err as Error))
        }
    }
}