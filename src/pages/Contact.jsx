import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'

export const Contact = () => (
  <div className="d-flex" style={{ width: '100%', height: '90vh' }}>
    <div
      style={{
        backgroundImage: `url(${PizzaLeft})`,
        height: '100%',
        flex: '50%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    ></div>
    <div
      className="d-flex flex-column justify-content-center"
      style={{ height: '100%', flex: '50%' }}
    >
      <h1
        style={{
          fontWeight: 10,
          fontSize: '50px',
          marginLeft: ' 30px',
        }}
      >
        Contact Us
      </h1>
      <form
        id="contactForm"
        method="POST"
        className="d-flex flex-column"
        style={{ width: 'auto', height: 'auto', padding: '30px' }}
      >
        <label htmlFor="name" className="form-label">
          Full Name
        </label>
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Enter full name..."
        />
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          className="form-control"
          type="text"
          name="email"
          placeholder="Enter email..."
        />
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form-control"
          name="message"
          placeholder="Enter message..."
          rows="6"
          required
        ></textarea>
        <button
          type="submit"
          className="btn btn-dark"
          style={{ marginTop: '10px' }}
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
)
