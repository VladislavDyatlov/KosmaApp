import React from "react";
import './Mars.css'

export const Mars = () =>{
    return (
      <div className="container-sm">
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src="https://w-dog.ru/wallpapers/14/4/310728521627519/art-lanshaft-planeta-kolca-doroga.jpg"
              width="500"
              height="700"
              role="img"
              aria-label="Placeholder: 500x500"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Oh yeah, it’s that good.{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
          <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src="https://phonoteka.org/uploads/posts/2021-04/1618451925_17-phonoteka_org-p-fon-na-temu-kosmos-18.jpg"
              width="500"
              height="700"
              role="img"
              aria-label="Placeholder: 500x500"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              And lastly, this one.{" "}
              <span className="text-muted">Checkmate.</span>
            </h2>
            <p className="lead">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you a better view of what this would look like with
              some actual content. Your content.
            </p>
          </div>
          <div className="col-md-5">
          <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src="https://img.fonwall.ru/o/5s/kosmos-vselennaya-planety-zvyozdy-2p3c.jpg?route=mid&amp;h=750"
              width="500"
              height="700"
              role="img"
              aria-label="Placeholder: 500x500"
            />
          </div>
        </div>
        <h1 className="pb-2 border-bottom"> Спутниковые сведенья о Земле </h1>
        <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm back">
    <img className="me-3" src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" alt="" width="48" height="48" />
    <div className="lh-1">
      <h1 className="h6 mb-0 text-white lh-1">Bootstrap</h1>
      <small>С 2011 г.</small>
    </div>
  </div>

  <div className="my-3 p-3 bg-body rounded shadow-sm">
    <h6 className="border-bottom pb-2 mb-0">Недавние обновления</h6>
    <div className="d-flex text-muted pt-3">
      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

      <p className="pb-3 mb-0 small lh-sm border-bottom">
        <strong className="d-block text-gray-dark">@username</strong>
        Некоторый репрезентативный контент-заполнитель с некоторой информацией об этом пользователе. Представьте, что это какое-то обновление статуса?
      </p>
    </div>
    <div className="d-flex text-muted pt-3">
      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"/><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>

      <p className="pb-3 mb-0 small lh-sm border-bottom">
        <strong className="d-block text-gray-dark">@username</strong>
        Еще несколько репрезентативных материалов-заполнителей, относящихся к этому другому пользователю. Возможно, еще одно обновление статуса.
      </p>
    </div>
    <div className="d-flex text-muted pt-3">
      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"/><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>

      <p className="pb-3 mb-0 small lh-sm border-bottom">
        <strong className="d-block text-gray-dark">@username</strong>
        Этот пользователь также получает репрезентативный контент-заполнитель. Может быть, они сделали что-то интересное, и вы действительно хотите выделить это в последних обновлениях.
      </p>
    </div>
    <small className="d-block text-end mt-3">
      <a href="#">Все обновления</a>
    </small>
  </div>
      </div>
    );
}