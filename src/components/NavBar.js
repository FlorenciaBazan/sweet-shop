import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">SWEET</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">BIG SALE</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">WINTER 22</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">LOCALES</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
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