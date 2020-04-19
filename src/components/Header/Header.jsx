import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import logo from '../../assets/images/logo.svg'
const Header = (props) => {
  return (
    <header className={style.header}>
      <img src={logo} className={style.AppLogo} alt="logo" />
      <h1 className={style.logo}>React Network</h1>
      <div className={style.loginBlock}>
        {props.isAuth === false ? (
          <div>
            <NavLink to={'./login'}>Login</NavLink>
          </div>
        ) : (
          <div>
            {props.login}
            <button onClick={props.logout}>Log out</button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
