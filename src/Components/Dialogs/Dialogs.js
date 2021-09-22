import React from 'react'
import './Dialogs.css'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Merlin' },
        { id: 2, name: 'Gremlin' },
        { id: 3, name: 'Goblin' },
        { id: 4, name: 'Goblet' },
        { id: 5, name: 'Gobelen' }
    ]

    let messages = [
        { id: 1, message: 'Hei ho' },
        { id: 2, message: 'Little Know' },
        { id: 3, message: 'Middle Big' },
        { id: 4, message: 'Here was a big trouble' },
        { id: 5, message: 'Hop hei la la ley!' }
    ]

    let dialogsElements = dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = messages
        .map(message => <Message message={message.message} id={message.id} />)

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