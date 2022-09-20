import React from 'react';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link to='/' className="navbar-brand">SWEET</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/category/1' className="nav-link">BIG SALE</Link>
                </li>
                <li className="nav-item">
                  <Link to='/category/2' className="nav-link">WINTER 22</Link>
                </li>
                <li className="nav-item">
                  <Link to='/category/locales' className="nav-link">LOCALES</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <Link to='/cart'><CartWidget /></Link>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;