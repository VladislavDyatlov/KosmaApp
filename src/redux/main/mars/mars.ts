import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { MarsPayloads } from '../../../model/MarsAction';

interface MarsResponse{
    loading: boolean;
    mars: MarsPayloads[],
    error: string;
}

const initialState: MarsResponse = {
    loading: false,
    mars: [],
    error: ''
}

export const MarsSlice = createSlice({
    name: 'mars',
    initialState,
    reducers:{
        Loadings(state){
            state.loading = true;
        },
        fetchMars:(state, action: PayloadAction<MarsPayloads[]>) =>{
            state.loading = false;
            state.mars = action.payload
        },
        Errors:(state, action: PayloadAction<Error>) =>{
            state.error = action.payload.message
        }
    }
})

export const {Loadings, fetchMars, Errors} = MarsSlice.actions;
export default MarsSlice.reducer