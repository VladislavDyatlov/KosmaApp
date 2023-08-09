import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { NewsPesponse, News } from '../../../model/MarsAction'

interface MainPayload{
    loading: boolean,
    error: string,
    states: NewsPesponse,
}

const initialState: MainPayload = {
    loading: false,
    error: "",
    states: {
        copyright: '',
        date: '',
        explanation: '',
        hdurl: '',
        title: ''

    },
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        stateLoadings: (state) =>{
            state.loading = true
        },
        stateAxios: (state, action: PayloadAction<NewsPesponse>) =>{
            state.loading = false
            state.states = action.payload
        },
        stateErrors: (state, action: PayloadAction<Error>) =>{
            state.error = action.payload.message
        }
    }
})

export const {stateLoadings, stateAxios, stateErrors} = newsSlice.actions;
export default newsSlice.reducer