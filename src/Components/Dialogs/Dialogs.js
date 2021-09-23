import React from 'react'
import './Dialogs.css'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} dialogs={props.dialogs} />)

    let messagesElements = props.state.messages.map(message => <Message message={message.message} id={message.id} messages={props.messages} />)

    return (
        <div className='dialogs'>
            <div>
                <div className='dialogItem'>
                    <div> {dialogsElements} </div>
                </div>
            </div>
            <div>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs