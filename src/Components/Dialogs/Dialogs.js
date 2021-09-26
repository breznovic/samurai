import React from 'react'
import './Dialogs.css'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogsReducer'

const Dialogs = (props) => {

    let state = props.store.getState ().dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} dialogs={props.dialogs} />)

    let messagesElements = state.messages.map(message => <Message message={message.message} id={message.id} messages={props.messages} />)

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className='dialogs'>
            <div>
                <div className='dialogItem'>
                    <div> {dialogsElements} </div>
                </div>
            </div>
            <div className='dialogItem'>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your message'
                            onChange={onNewMessageChange}
                            value={newMessageBody}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>

    )
}



export default Dialogs