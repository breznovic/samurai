import React from 'react'
import classes from '../Navbar/Navbar.module.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <div className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users'>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </div>
    )
}

export default Navbar