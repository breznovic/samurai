import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                <div className={classes.item}>
                    <NavLink to='/dialogs/1'>Homer</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs/2'>John</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs/3'>Mike</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs/4'>Steven</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs/5'>Joe</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Hop!
                </div>
                <div className={classes.message}>
                    Hey!
                </div>
                <div className={classes.message}>
                    La!
                </div>
                <div className={classes.message}>
                    La!
                </div>
                <div className={classes.message}>
                    Ley!
                </div>
            </div>
        </div>
    )
}

export default Dialogs