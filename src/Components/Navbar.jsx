import React from 'react'
import { Link } from 'react-router-dom'

import pizza from '../assets/pizzaLogo.png'

export const Navbar = () => (
  <div>
    <nav
      className="navbar fixed-top navbar-expand-sm bg-dark d-flex flex-row justify-content-around"
      style={{ backgroundColor: '#121619' }}
    >
      <div className="d-flex flex-row">
        {/* <h1 style={{ marginRight: '10px' }}>Pizza na hora</h1> */}
        <img src={pizza} alt="pizza_logo" style={{ width: '70px' }} />
      </div>
      <div>
        <ul className="d-flex flex-row justify-start navbar-nav me-auto mb-2 mb-lg-0">
          <Link className="nav-item" style={{ marginLeft: '1em' }} to="/">
            Home
          </Link>

          <Link
            to="/pedidos"
            className="nav-item"
            style={{ marginLeft: '10px' }}
          >
            Pedidos
          </Link>
          <Link
            to="/contato"
            className="nav-item"
            style={{ marginLeft: '10px' }}
          >
            Contato
          </Link>
          <Link to="/about" className="nav-item" style={{ marginLeft: '10px' }}>
            Sobre nós
          </Link>
        </ul>
      </div>
    </nav>
  </div>
)
