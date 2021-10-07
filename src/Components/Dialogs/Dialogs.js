import React from "react"
import DialogItem from "./DialogItem/DialogsItem"
import './Dialogs.css'
import Message from "./Message/Message"

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Goblin' },
        { id: 2, name: 'Gremlin' },
        { id: 3, name: 'Golem' },
        { id: 4, name: 'Goblet' },
        { id: 5, name: 'Gobble' }
    ]

    let dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesData = [
        { id: 1, message: 'I am green!' },
        { id: 2, message: 'I am from subway!' },
        { id: 3, message: 'I made from stone!' },
        { id: 4, message: 'I made from gold!' },
        { id: 5, message: 'I love to eat!' }
    ]

    let messagesElements = messagesData
        .map(message => <Message message={message.message} id={message.id} />)


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