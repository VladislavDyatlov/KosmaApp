import React, {useState, useEffect} from 'react';
import {useAppDispatch} from '../hook/react'
import './auth.css'
import { authAction } from '../../redux/action/auth/authAction';
import { register } from '../../redux/action/register/register';

export const Auth = () =>{

    const [active, setActive] = useState(true)
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const dispatch = useAppDispatch()

    const handler = () =>{
      dispatch(authAction(user, pass))
    }

    const handlers = () =>{
      dispatch(register({username: user, password: pass}))
    }

    return (
      <form className="container d-flex align-items-center justify-content-center">
        <div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label className="col-form-label">Login</label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="inputPassword6"
              className="form-control"
              aria-describedby="passwordHelpInline"
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <span id="passwordHelpInline" className="form-text">
              Должно быть от 6-10 символов
            </span>
          </div>
        </div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label className="col-form-label">Password</label>
          </div>
          <div className="col-auto">
            <input
              type="password"
              id="inputPassword6"
              className="form-control"
              aria-describedby="passwordHelpInline"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <span id="passwordHelpInline" className="form-text">
                Должно быть от 6-10 символов
            </span>
          </div>
        </div>
        <div className="col-auto">
            { active ?
            <><a className="btn btn-primary bt" onClick={() => handler()}>Воход</a>
            <button type="button" className="btn btn-primary" onClick={() => setActive(false)}>Регистрация</button></>
            :
            null}
            {active ? null : <button type="button" className="btn btn-primary" onClick={() => handlers()}>Зарегестрироваться</button>}
        </div>
        </div>
      </form>
    );
}