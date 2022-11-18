import React from 'react'
import { Link } from 'react-router-dom'

import BannerImage from '../assets/pizza.jpeg'

export const Home = () => (
  <div
    className="d-flex flex-column justify-content-center align-items-start"
    style={{
      backgroundImage: `url(${BannerImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
    }}
  >
    <div style={{ width: 'auto', marginLeft: '50px' }}>
      <h1
        className="justify-content-center align-items-center"
        style={{
          fontSize: '50',
          height: '60px',
          fontWeight: '50',
          color: 'black',
        }}
      >
        Pedro's Pizzeria
      </h1>
      <p
        style={{
          padding: '0',
          fontSize: '40px',
          fontWeight: 'lighter,',
          color: 'black',
        }}
      >
        PIZZA TO FIT ANY TASTE
      </p>
      <Link to="/menu">
        <button className="btn btn-dark">Order now</button>
      </Link>
    </div>
  </div>
)
