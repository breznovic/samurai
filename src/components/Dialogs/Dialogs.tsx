import React, {ChangeEvent} from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogPropsType, MessagePropsType,} from "../../redux/store";
import {SendMessageBodyAC, UpdateNewMessageBodyAC} from "../../redux/dialogsReducer";

type PropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    messageBody: string
    dispatch: (action: ActionsTypes) => void
}

function Dialogs(props: PropsType) {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = props.messageBody

    const onSendMessageClick = () => {
        props.dispatch(SendMessageBodyAC())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let messageBody = e.target.value
        props.dispatch(UpdateNewMessageBodyAC(messageBody))
    }

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