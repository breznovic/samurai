import React from "react"
import { NavLink } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    return (
      
        <nav className='nav'>
      <div className='navItem'>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div className='navItem'>
      <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className='navItem'>
      <NavLink to='/users'>Users</NavLink>
        </div>
      <div className='navItem'>
      <NavLink to='/news'>News</NavLink>
        </div>
      <div className='navItem'>
      <NavLink to='/music'>Music</NavLink>
        </div>
      <div className='navItem'>
      <NavLink to='/settings'>Settings</NavLink>
        </div>
        </nav>
        
    )
}

export default Navbar