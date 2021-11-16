import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: number
    name: string
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogPropsType) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={classes.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {

    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                <DialogItem name={'Homer'} id={1}/>
                <DialogItem name={'Cristian'} id={2}/>
                <DialogItem name={'Joe'} id={3}/>
                <DialogItem name={'John'} id={4}/>
                <DialogItem name={'Michael'} id={5}/>
            </div>
            <div className={classes.messages}>
                <Message message='Hop'/>
                <Message message='Hey'/>
                <Message message='La'/>
                <Message message='La'/>
                <Message message='Ley'/>
            </div>
        </div>
    )
}

export default Dialogs