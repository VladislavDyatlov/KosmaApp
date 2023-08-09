import {Dispatch} from '@reduxjs/toolkit'
import axios from 'axios'
import { AppDispatch } from '../..'
import { MainPayloads, MainPlay } from '../../../model/MarsAction'
import { stateSlice } from '../../main/state/state' 
 
export const fetchAction = (count = 11, page = 1, sol = "1") =>{
    return async (dispatch: AppDispatch) =>{
        try{
            dispatch(stateSlice.actions.stateLoading())
            const response = await axios.get<MainPlay<MainPayloads>>(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=FNG1CUN7OY2mQHnl7dM05RsseDf8sKvHbnv7L68o`, {
                params: {
                    count: count,
                    page: page,
                }
            })
            dispatch(stateSlice.actions.stateFetch(response.data.photos))
        } catch(e){ 
            dispatch(stateSlice.actions.stateError(e as Error))
        }
    }
}