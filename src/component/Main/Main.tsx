import React, {useEffect, useState} from 'react';
import { fetchAction } from '../../redux/action/state/state';
import { useAppSelector, useAppDispatch } from '../hook/react';
import ReactPaginate from 'react-paginate';
import './Main.css'
import { addCard } from '../../redux/main/card/card';
import { MainPayloads, NewsPesponse } from '../../model/MarsAction';

export const Main = () =>{

    const {loading, states, error} = useAppSelector(state => state.state)
    const dispatch = useAppDispatch()
    const [sol, setSol] = useState("1")
    const count = 20;
    const PageCount = Math.ceil(states.length / count);
    const page = 1;

    useEffect(() =>{
        dispatch(fetchAction(count,page, sol)) 
    }, [sol])

    const handle = ({selected}: {selected: number}) =>{
      const page = selected + 1
      dispatch(fetchAction(count,page, sol)) 
    }

    return (
      <div className="album py-5 bg-light">
        <div className="container-sm">
          <div className="pb-2 border-bottom down">
            <h2>Фото с марсахода Curiosity</h2>
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <label className="col-form-label">Введите sol</label>
              </div>
              <div className="col-auto">
                <input
                  type="number"
                  id="inputPassword6"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  value={sol}
                  onChange={(e) => setSol(e.target.value)}
                />
              </div>
              <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                  Должно быть не более 4 символов
                </span>
              </div>
            </div>
          </div>
          <div className="text-align">
          {loading && (
              <div className="spinner-border text-primary" role="status"></div>
            )}
            {error && (
              <>
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
                <p>{error}</p>
              </>
            )}            
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {states.length > 0 ? (
              <>
                {states?.map((state) => (
                  <div className="col">
                    <div className="card shadow-lg">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src={state.img_src}
                        width="100%"
                        height="225"
                        role="img"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Название фото: {state.camera.full_name}
                        </p>
                        <p className="card-text">
                          Название марсахода: {state.rover.name}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              {state.sol}
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              {state.rover.status}
                            </button>
                          </div>
                          <small className="text-muted">
                            {state.earth_date}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h2 className="text-align">Извините, но такого sola нет</h2>
            )}
          </div>
        {loading
        ?
          null
        :
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
        }
        </div>
      </div>
    );
}