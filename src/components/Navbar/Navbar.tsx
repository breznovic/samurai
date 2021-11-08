import React from 'react'
import classes from '../Navbar/Navbar.module.css'


function Navbar() {
    return (
        <div className={classes.nav}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>Users</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </div>
    )
}

export default Navbar