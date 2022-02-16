import React, {ChangeEvent} from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPropsType, MessagePropsType,} from "../../redux/reduxStore";
import {Redirect} from "react-router-dom";

type PropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    messageBody: string
    sendMessage: () => void,
    updateNewMessageBody: (message: string) => void
    isAuth: boolean
}

function Dialogs(props: PropsType) {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = props.messageBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let messageBody = e.target.value
        props.updateNewMessageBody(messageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs