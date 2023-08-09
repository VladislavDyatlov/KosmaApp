import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {NewsPesponse} from '../../../model/MarsAction'

interface CardPayload{
    date: string;
    card: NewsPesponse[];
}

const initialState: CardPayload = {
    date: '',
    card: []
}

export const CardSlised = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addCard(state, action: PayloadAction<NewsPesponse>){
            state.card.push(action.payload)
        },
        deleteCard(state, action: PayloadAction<NewsPesponse>){
            state.card = state.card.filter(card => card.title !== action.payload.title)
        }
    }
})

export const {addCard, deleteCard} = CardSlised.actions;
export default CardSlised.reducer