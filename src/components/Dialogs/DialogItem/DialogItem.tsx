import React from 'react'
import classes from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: number
    name: string
}

const DialogItem = (dialog: DialogPropsType) => {

    let path = '/dialogs/' + dialog.id

    return (
        <div className={classes.item}>
            <NavLink to={path}>{dialog.name}</NavLink>
        </div>
    )
}

export default DialogItem