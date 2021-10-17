import React from 'react'
import { Redirect } from 'react-router'
import DialogItem from './DialogItem/DialogsItem'
import './Dialogs.css'
import Message from './Message/Message'

const Dialogs = (props) => {

let state = props.dialogsPage    

let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} 
    key={dialog.id} id={dialog.id} />)

let messagesElements = state.messages.map(message => <Message message={message.message} 
    key={message.id} id={message.id} />)

let newMessageBody = state.newMessageBody

let onSendMessageClick = () => {
    props.sendMessage()
} 

let onNewMessageChange = (e) => {
let body = e.target.value
props.updateNewMessageBody(body)
} 

if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className='dialogs'>
            <div className='dialogsItem'>
                {dialogsElements}
            </div>
            <div className='dialogsItem'>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} 
                    onChange={onNewMessageChange}
                    placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send message</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs