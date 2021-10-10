import React from "react"
import { sendMessageAC, updateNewMessageBodyAC } from "../../Redux/dialogsReducer"
import DialogItem from "./DialogItem/DialogsItem"
import './Dialogs.css'
import Message from "./Message/Message"

const Dialogs = (props) => {

let state = props.store.getState().dialogsPage    

let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

let messagesElements = state.messages.map(message => <Message message={message.message} id={message.id} />)

let newMessageBody = state.newMessageBody

let onSendMessageClick = () => {
    props.store.dispatch(sendMessageAC())
} 

let onNewMessageChange = (e) => {
let body = e.target.value
props.store.dispatch(updateNewMessageBodyAC(body))
} 

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