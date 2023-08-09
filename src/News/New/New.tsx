import axios from "axios";
import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import { NewsPesponse } from "../../model/MarsAction";

export const New = () =>{

    const params = useParams()
    const [action, setAction] = useState<NewsPesponse | null>(null)
    const [loading, setLoading] = useState(false)
    
    const fetchNews = async () =>{
        setLoading(true)
        const res = await axios.get<NewsPesponse>(`https://api.nasa.gov/planetary/apod?api_key=U0PqJ5UprbVQExkXc7ZgsGVfIM7Z1O8Uiv7g2hOO&date=${params.id}`)
        setAction(res.data)
        setLoading(false)
    }

    useEffect(() =>{
        fetchNews();
    }, [])

    return(
        <div className="container-sm downs">
        <div className="pb-2 border-bottom down">
          <h2>Новость за {action?.date}</h2>
        </div>
        {loading ? (
          <div className="spinner-border text-primary" role="status"></div>
        )
        :
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">{action?.title}</h1>
            <img src={action?.hdurl || "https://w-dog.ru/wallpapers/3/14/323589329325855/risunok-fantastika-v-kosmose-planety-i-zvezdy.jpg"} className="img-fluid imag" />
            <p className="col-md-8 fs-4">
              {action?.explanation}
            </p>
          </div>
        </div>        
        }
      </div>
    )
}