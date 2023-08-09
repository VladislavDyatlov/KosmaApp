import React, {useEffect, useState} from 'react';
import { AuthSlice } from '../../redux/main/auth/auth';
import {useAppSelector, useAppDispatch} from '../hook/react'
import {Link} from "react-router-dom"
import './Navbar.css'
import { deleteCard } from '../../redux/main/card/card';

export const Navbar = () => {
    
    const {username} = useAppSelector(auth => auth.auth)
    const {card} = useAppSelector(card => card.card)
    const {states} = useAppSelector(news => news.news)
    const cards = card.some(item => item.title === states.title)
    const [active, setActive] = useState(false)
    const dispatch = useAppDispatch()

    const handler = () =>{
      if(cards) dispatch(deleteCard(states))
    }

    const logouts = () =>{
      dispatch(AuthSlice.actions.logout())  
    }
    
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614546477_23-p-zemlya-na-belom-fone-26.png"
              alt=""
              width="42"
              height="24"
              className="d-inline-block align-text-top"
            />
            <strong><Link className="link" to="/">KosmoLab</Link></strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > 
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Главная
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/news">
                  Новости
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/mars">
                  Марс
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/earth">
                  Земля
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <div>
                <span className="tooltips">{card.length || 0}</span>
                <span className="spa" onClick={() => setActive(true)}>{username}</span>
                {active &&
                <div className="space_list">
                <div className="space_title">
                {card.map((car) => (
                  <div className="space_display">
                    <h6><Link className="space_link" to={`/news/${car.date}`}>{car.title || "Корзина пуста"}</Link></h6>
                    <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={() => handler()}></button>                   
                  </div>
                ))}
                </div>
                <div className="space_card">
                  <div className="space_total">
                    <span onClick={() => setActive(false)}>Скрыть корзину</span>
                  </div>
                </div>
              </div>                 
                }
              </div>
              <a onClick={() => logouts()}>Выйти</a>
            </div>
          </div>
        </div>
      </nav>
    );
}