import React from "react"
import DialogItem from "./DialogItem/DialogsItem"
import './Dialogs.css'
import Message from "./Message/Message"

const Dialogs = (props) => {

let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

let messagesElements = props.state.messages.map(message => <Message message={message.message} id={message.id} />)

    return (
        <div className='dialogs'>
            <div className='dialogsItem'>
                {dialogsElements}
            </div>
            <div className='dialogsItem'>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs