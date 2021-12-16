import React from 'react'
import classes from '../Dialogs.module.css'
import {StoreType} from "../../../redux/state";

type MessagePropsType = {
    id: number
    message: string
}

const Message = (props: MessagePropsType) => {

    return (
            <div className={classes.message}>
                {props.message}
            </div>
    )
}

export default Message