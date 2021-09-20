import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        
            <nav className='nav'>
                <div className='itemNav active'><a>Profile</a></div>
                <div className='itemNav'><a>Messages</a></div>
                <div className='itemNav'><a>News</a></div>
                <div className='itemNav'><a>Music</a></div>
                <div className='itemNav'><a>Settings</a></div>
            </nav>
        
    )
}

export default Navbar
