import React from 'react'
import classes from '../Navbar/Navbar.module.css'


function Navbar() {
    return (
        <div className={classes.nav}>
            <div className={classes.item}>
                <a>Profile</a>
            </div>
            <div className={classes.item}>
                <a>Messages</a>
            </div>
            <div className={classes.item}>
                <a>Users</a>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </div>
    )
}

export default Navbar