import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">SWEET</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">BIG SALE</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">WINTER 22</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">LOCALES</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <CartWidget />
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;