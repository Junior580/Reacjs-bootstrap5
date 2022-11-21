import React from 'react'
import { MenuItem } from '../Components/MenuItem'
import { MenuList } from '../helpers/MenuList'
import style from '../styles/Menu.module.scss'

export const Menu = () => (
  <div className={style.Menu}>
    <h1 className={style.menuTitle}>Our Menu</h1>
    <div className={style.menuList}>
      {MenuList.map((menuItem, key) => (
        <MenuItem
          key={key}
          image={menuItem.image}
          name={menuItem.name}
          price={menuItem.price}
        />
      ))}
    </div>
  </div>
)
