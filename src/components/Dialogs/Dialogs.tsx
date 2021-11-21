import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: number
    name: string
}

type MessagePropsType = {
    id: number
    message: string
}

const DialogItem = (dialog: DialogPropsType) => {

    let path = '/dialogs/' + dialog.id

    return (
        <div className={classes.item}>
            <NavLink to={path}>{dialog.name}</NavLink>
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

    let dialogs: Array<DialogPropsType> = [
        {id: 1, name: 'Homer'},
        {id: 2, name: 'Cristian'},
        {id: 3, name: 'Joe'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Michael'},
    ]

    let messages: Array<MessagePropsType> = [
        {id: 1, message: 'Hop'},
        {id: 2, message: 'Hey'},
        {id: 3, message: 'La'},
        {id: 4, message: 'La'},
        {id: 5, message: 'Ley'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs