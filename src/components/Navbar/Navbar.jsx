import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = (props) => {
  // if (props.isAuth == false) {
  //   return <div className={style.navbar}>You need login to see more</div>
  // } else
  return (
    <div className={style.navbar}>
      <ul className={style.nav}>
        <li className={style.item}>
          <NavLink to="/profile" activeClassName={style.active}>
            Profile
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/dialogs" activeClassName={style.active}>
            Messages
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/news" activeClassName={style.active}>
            News
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/music" activeClassName={style.active}>
            Music
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/settings" activeClassName={style.active}>
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
