import React from 'react'
import style from '../styles/Menu.module.scss'

export const MenuItem = ({ image, name, price }) => (
  <div className={style.menuItem}>
    <div style={{ backgroundImage: `url(${image})` }}> </div>
    <h1> {name} </h1>
    <p> ${price} </p>
  </div>
)
