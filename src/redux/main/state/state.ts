import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { MainPlay, MainPayloads } from '../../../model/MarsAction'

interface MainPayload{
    loading: boolean,
    error: string,
    states: MainPayloads[],
}

const initialState: MainPayload = {
    loading: false,
    error: "",
    states: [],
}

export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        stateLoading: (state) =>{
            state.loading = true
        },
        stateFetch: (state, action: PayloadAction<MainPayloads[]>) =>{
            state.loading = false
            state.states = action.payload
        },
        stateError: (state, action: PayloadAction<Error>) =>{
            state.error = action.payload.message
        }
    }
})

export const {stateLoading, stateFetch, stateError} = stateSlice.actions;
export default stateSlice.reducer