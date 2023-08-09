import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../component/hook/react";
import { news } from "../redux/action/news/news";
import { addCard, deleteCard } from "../redux/main/card/card";
import './News.css'

export const News = () =>{

    const {loading, states, error} = useAppSelector(news => news.news)
    const {card} = useAppSelector(cards => cards.card)
    const cards = card.some(item => item.title === states.title)
    const dispatch = useAppDispatch()
    const [date, setDate] = useState('')

    useEffect(() =>{
        dispatch(news(date))
    }, [date])

   
    const handle = () =>{
      if(cards){
        dispatch(deleteCard(states))
      }
      dispatch(addCard(states))
    }


    useEffect(() => {
      console.log(card)
    }, [handle])

    return (
      <div className="container-sm downs">
        <div className="pb-2 border-bottom down">
          <h2 data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">Новости Земли</h2>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label className="col-form-label">Выбери дату</label>
            </div>
            <div className="col-auto">
              <input
                type="date"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        { loading
        ?
        <div className="spinner-border text-primary" role="status"></div>
        :
        <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold" onClick={() => handle()}>{states?.title}</h1>
          <img src={states.hdurl || "https://w-dog.ru/wallpapers/3/14/323589329325855/risunok-fantastika-v-kosmose-planety-i-zvezdy.jpg"} className="img-fluid imag" />
          <p className="col-md-8 fs-4">
            {states.explanation.slice(0,398)}...
          </p>
          <Link to={`${states.date}`} className="btn btn-primary btn-lg" type="button">
            Читать дальше
          </Link>
        </div>
      </div>        
        }
      </div>
    );
}