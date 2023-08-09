import axios from 'axios'
import { AppDispatch } from '../..'
import { MarsPayloads, MarsPlay } from '../../../model/MarsAction'
import { Errors, fetchMars, Loadings } from '../../main/mars/mars'

export const Mars = (date = '2015-06-03', page = 1) =>{
    return async (dispatch: AppDispatch) =>{
        try{
           dispatch(Loadings()) 
           const res = await axios.get<MarsPlay<MarsPayloads>>(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=kqcBTsfSo8GhLf5CdljIzf1pd9IsKKdaen1DQ3lf`, {
            params: {
                page: page
            }
           })
           dispatch(fetchMars(res.data.photos))
        }catch(e){
            dispatch(Errors(e as Error))
        }
    }
} 