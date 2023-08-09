import axios from "axios";
import React, { useEffect, useState } from "react";
import {useAppSelector, useAppDispatch} from '../component/hook/react'
import ReactPaginate from 'react-paginate';
import { Mars } from "../redux/action/mars/mars";

export const Earth = () =>{

    const {mars, loading, error} = useAppSelector(mars => mars.mars)
    const dispatch = useAppDispatch()
    const [date, setDate] = useState('2015-06-03')
    const PageCount = Math.ceil(mars.length / 10) 

    const handle = ({selected}: {selected: number}) =>{
        const page = selected + 1
        dispatch(Mars(date, page))
    }

    useEffect(() =>{
        dispatch(Mars(date))
    }, [date])

    return(
        <>
        <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border border-dark shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">Граница героя с обрезанным изображением и тенями</h1>
            <p className="lead">Быстро создавайте и настраивайте адаптивные сайты, ориентированные на мобильные устройства, с помощью Bootstrap, самого популярного в мире инструментария с открытым исходным кодом для интерфейса пользователя, включающего переменные и миксины Sass, адаптивную сеточную систему, обширные готовые компоненты и мощные плагины JavaScript.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Основная</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">По умолчанию</button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 position-relative overflow-hidden shadow-lg">
            <div className="position-lg-absolute top-0 left-0 overflow-hidden">
              <img className="d-block rounded-lg-3" src="https://pic.xenomorph.ru/2013-01/1357377389_41.jpg" alt="" width="720" />
            </div>
          </div>
        </div>
      </div> 
      <div className="container-sm" id="custom-cards">
      <div className="pb-2 border-bottom down">
          <h2 data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">Фото Марса</h2>
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

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
    {loading && <div className="spinner-border text-primary" role="status"></div>}
    {error && <><div className="spinner-border text-primary" role="status"></div>{error}</>}
    {mars.map((mar) => (
      <div className="col">
      <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url(${mar.img_src})`}}>
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{mar.camera.full_name}</h2>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img src="https://cdn-icons-png.flaticon.com/512/1534/1534067.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em" />
              <small>{mar.camera.name}</small>
            </li>
            <li className="d-flex align-items-center">
              <svg className="bi me-2" width="1em" height="1em" />
              <small>{mar.sol}</small>
            </li>
          </ul>
        </div>
      </div>
    </div>   
    ))}    
      </div> 
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handle}
        pageRangeDisplayed={5}
        pageCount={PageCount}
        containerClassName={"paginationBttns"}
        activeClassName={"paginationActive"}
        nextLinkClassName="break"
        previousLinkClassName="break"
        previousLabel="<"
        /> 
      </div>     
        </>

    )
}