import axios from 'axios'
import { AppDispatch } from '../..'
import { NewsPesponse } from '../../../model/MarsAction'
import { newsSlice } from '../../main/news/news' 

export const news = (date = '1995-06-16') =>{
    return async (dispatch: AppDispatch) =>{
        try{
            dispatch(newsSlice.actions.stateLoadings())
            const response = await axios.get<NewsPesponse>(`https://api.nasa.gov/planetary/apod?api_key=U0PqJ5UprbVQExkXc7ZgsGVfIM7Z1O8Uiv7g2hOO&date=${date}`)
            dispatch(newsSlice.actions.stateAxios(response.data))
        }catch(e){
            dispatch(newsSlice.actions.stateErrors(e as Error))
        }
    }
}