import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        
            <nav className='nav'>
                <div className='itemNav'>
                <div><NavLink to="/profile">Profile</NavLink></div>
                <div><NavLink to="/dialogs">Messages</NavLink></div>
                <div><NavLink to="/news">News</NavLink></div>
                <div><NavLink to="/users">Users</NavLink></div>
                <div><NavLink to="/music">Music</NavLink></div>
                <div><NavLink to="/settings">Settings</NavLink></div>
                </div>
            </nav>
        
    )
}

export default Navbar
