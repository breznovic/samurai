import React from 'react'
import './Dialogs.css'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} dialogs={props.dialogs} />)

    let messagesElements = props.state.messages.map(message => <Message message={message.message} id={message.id} messages={props.messages} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)

    }

    return (
        <div className='dialogs'>
            <div>
                <div className='dialogItem'>
                    <div> {dialogsElements} </div>
                </div>
            </div>
            <div className='dialogItem'>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>

    )
}



export default Dialogs