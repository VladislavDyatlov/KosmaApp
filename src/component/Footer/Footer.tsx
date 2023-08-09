import React from 'react';

export const Footer = () => {
    return (
        <div className="container-sm">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img className="bi" src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614546477_23-p-zemlya-na-belom-fone-26.png" width="45" height="24" />
                    </a>
                    <span className="text-muted">&copy; 2021 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="#"><img className="bi" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/335_Telegram_logo-1024.png" width="24" height="24" /></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><img className="bi" src="https://lh5.googleusercontent.com/Y3VrPY5nnIeuHrsREDS1lvUa7ILYPaVytcOinsQ6RQLvmLhWSwDHaIqmVqMo4g1zasX2Iohaly7NqGVMHEXUcuLMTFwDPaz40CSCgCgCXV1aS8GsoZKSBVO2fgYLneD-bsK8b4_t=s0" width="24" height="24" /></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><img className="bi" src="https://static.tildacdn.com/tild3631-3635-4934-a134-386337353061/2-1024x1010.png" width="24" height="24" /></a></li>
                </ul>
            </footer>            
        </div>
    )
}