import React, { Component } from 'react';

class Inicio extends Component {
    render() {
        return (
          <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content />
            <meta name="author" content />
            <title>Phillips - More Than Toys</title>
            {/* Favicon*/}
            <link rel="icon" type="image/x-icon" href="/assets/icons/sold.svg" />
            {/* Bootstrap icons*/}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            {/* Core theme CSS (includes Bootstrap)*/}
            <link href="/static/css/styles.css" rel="stylesheet" />
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container px-4 px-lg-5">
                
                {/*<a href="/templates/index.html"><img src="/assets/icons/logo1.svg" width="150px"/></a>*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/templates/index.html"><i className="bi bi-radioactive"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-radioactive" viewBox="0 0 16 16">
                            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z" />
                            <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                          </svg></i> Inicio</a></li>
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/templates/index.html"><i className="bi bi-robot"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-robot" viewBox="0 0 16 16">
                            <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                            <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                          </svg></i> Ofertas</a></li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="navbarDropdown" href="none" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-gift" /> Comprar </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="none">Productos</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="none">Favoritos</a></li>
                        <li><a className="dropdown-item" href="none">Nuevos Articulos</a></li>
                      </ul>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className="btn btn-outline-dark" type="submit">Buscar</button>
                  </form>
                  <form className="d-flex">
                    <button className="btn btn-outline-dark" type="submit">
                      {/*<a href="/templates/login.html"> */}
                      <i className="bi-people-fill me-1" />
                      Inicio Sesión
                      <span className="badge bg-dark text-black ms-1 rounded-pill" />
                    </button>
                    <button className="btn btn-outline-dark2" type="submit" /> 
                    <button className="btn btn-outline-dark" type="submit">
                      {/*<a href="/templates/login.html"> */}
                      <i className="bi-heart-fill me-1" />
                      Favoritos
                      <span className="badge bg-dark text-white ms-1 rounded-pill">1</span>
                    </button>
                  </form>
                </div>
              </div>
            </nav>
            <br /><br />
          
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/assets/wallpapers/banner1.svg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <br />
                    <p />
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/assets/wallpapers/banner2.svg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <br />
                    <p />
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/assets/wallpapers/banner4.svg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <br />
                    <p />
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* Section*/}
            <section className="py-5">
              <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Product image*/}
                      <img className="card-img-top" src="/assets/toys/marvel1.png" alt="..." />
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">Coleccion Especial 8 Heroes Marvel</h5>
                          {/* Product status*/}
                          <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                          </div>
                          {/* Product price*/}
                          <h7>Estimado: $460K - $640K</h7>
                          <br />
                          <h7><strong>Subasta cierra en: </strong></h7>
                          <br />
                          <h7> 17:30:20</h7>
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <a className="btn btn-outline-dark mt-auto" href="none"><i className="bi bi-share" /></a>
                          <a className="btn btn-outline-dark mt-auto" href="none">Ofertar</a>
                          <a className="btn btn-outline-dark mt-auto" href="none"><i className="bi bi-heart" /></a>
                        </div>
                      </div>
                    </div>
                  </div>                    <div className="col mb-5">
                    <div className="card h-100">
                      {/* Sale badge*/}
                      <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>3 Ofertas</div>
                      {/* Product image*/}
                      <img className="card-img-top" src="/assets/toys/marvel2.png" alt="..." />
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">Capitan America Soldado Del Invierno 1ra Edicion</h5>
                          {/* Product reviews*/}
                          <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                          </div>
                          {/* Product price*/}
                          <span className="text-muted text-decoration-line-through">$6'000.000</span>
                          $4'500.000
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <a className="btn btn-outline-dark mt-auto" href="none"><i className="bi bi-share" /></a>
                          <a className="btn btn-outline-dark mt-auto" href="none">Ofertar</a>
                          <a className="btn btn-outline-dark mt-auto" href="none"><i className="bi bi-heart" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Sale badge*/}
                      <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sold</div>
                      {/* Product image*/}
                      <img className="card-img-top" src="/assets/toys/marvel3.png" alt="..." />
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">Spiderman Ultimate Edition 2021 Post Back Home</h5>
                          {/* Product price*/}
                          <span className="text-muted text-decoration-line-through">$10'000.000</span>
                          $5'000.000
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <a className="btn btn-outline-dark mt-auto" href="none"><i className="bi bi-share" /></a>
                          <a className="btn btn-outline-dark mt-auto" href="none">Ofertar</a>
                          <a className="btn btn-outline-dark mt-auto" href="none"><i className="bi bi-heart" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Product image*/}
                      <img className="card-img-top" src="/assets/toys/marvel4.png" alt="..." />
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">Black Widow - Legends Edition 2022</h5>
                          {/* Product reviews*/}
                          <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                          </div>
                          {/* Product price*/}
                          $9'200.000
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <a className="btn btn-outline-dark mt-auto" href="none"><i className="bi bi-share" /></a>
                          <a className="btn btn-outline-dark mt-auto" href="none">Ofertar</a>
                          <a className="btn btn-outline-dark mt-auto" href="none"><i className="bi bi-heart" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Sale badge*/}
                      <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>29 Ofertas</div>
                      {/* Product image*/}
                      <img className="card-img-top" src="/assets/toys/dc1.png" alt="..." />
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">Batman Version Coleccionable 1999</h5>
                          {/* Product price*/}
                          <span className="text-muted text-decoration-line-through">$200.000</span>
                          $120.000
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="none">Ofertar</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Product image*/}
                      <img className="card-img-top" src="/assets/toys/dc2.png" alt="..." />
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">Superman Clasico Version 1994</h5>
                          {/* Product price*/}
                          $8'800.000
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="none">Ofertar</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Sale badge*/}
                      <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Nuevo</div>
                      {/* Product image*/}
                      <img className="card-img-top" src="/assets/toys/dc3.png" alt="..." />
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">Batman Vs Superman </h5>
                          {/* Product reviews*/}
                          <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                          </div>
                          {/* Product price*/}
                          <span className="text-muted text-decoration-line-through">$18'000.000</span>
                          $9'000.000
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="none">Ofertar</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Product image*/}
                      <img className="card-img-top" src="/assets/toys/dc4.png" alt="..." />
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">Flash Version con 3 Pares de Guantes</h5>
                          {/* Product reviews*/}
                          <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                          </div>
                          {/* Product price*/}
                          $600000
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="none">Ofertar</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Footer*/}
            <footer className="py-5 bg-dark">
              <div className="container"><p className="m-0 text-center text-white">Copyright © 2021 EQUIPO 3 GRUPO 17. TODOS LOS DERECHOS RESERVADOS.
                  ©  UNINORTE - MINTIC © | Email: info@phillips.com | Teléfono: (+57) 601 235 846.</p></div>
            </footer>
            {/* Bootstrap core JS*/}
            {/* Core theme JS*/}
          </div>
        );
      }
};
 
export default Inicio;