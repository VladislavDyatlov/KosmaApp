import { AppDispatch } from "../.."
import { AuthSlice } from "../../main/auth/auth"
import { AuthActions } from "../../../model/MarsAction"

interface registr{
    username: string;
    password: string;
}

export const register = (date: registr) =>{
    return async (dispatch: AppDispatch) =>{
        try{
            const json = JSON.stringify({date})
            const res = await fetch('http://localhost:3000/authApi.json', {
                method: 'POST',
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: json,
              })
            dispatch(AuthSlice.actions.login({username: date.username, isAuth: true}))
        }catch(e){
            dispatch(AuthSlice.actions.errors(e as Error))
        }
    }
}