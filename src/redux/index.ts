import { configureStore } from '@reduxjs/toolkit'
import stateSlice from './main/state/state'
import AuthSlice from './main/auth/auth'
import newsSlice from './main/news/news'
import CardSlised from './main/card/card'
import MarsSlice from './main/mars/mars'

export const store = configureStore({
    reducer:{
        state: stateSlice,
        auth: AuthSlice,
        news: newsSlice,
        card: CardSlised,
        mars: MarsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch