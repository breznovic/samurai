import React from 'react'
import { NavLink } from 'react-router-dom'
import icon from './../../Assets/Images/icon.png'
import './Header.css'

const Header = (props) => {
  return (

    <header className='header'>
      <img src={icon} />
      <div className='loginBlock'>
        { props.isAuth ? props.login
        : <NavLink to='/login'>Login</NavLink>}
      </div>
    </header>

  )
}

export default Header
