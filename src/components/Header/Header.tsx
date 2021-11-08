import React from 'react'
import classes from '../Header/Header.module.css'
import samurai from '../../Assets/Images/samurai.jpg'

function Header() {
    return (
        <div className={classes.header}>
            <img src={samurai}/>
        </div>
    )
}

export default Header