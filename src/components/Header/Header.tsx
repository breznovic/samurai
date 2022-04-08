import React from 'react'
import classes from '../Header/Header.module.css'
import samurai from '../../assets/Images/samurai.jpg'
import {NavLink} from 'react-router-dom'

type PropsType = {
    isAuth: boolean
    login: string
}

function Header(props: PropsType) {
    return (
        <div className={classes.header}>
            <img src={samurai}/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login :  <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    )
}

export default Header