import React from "react"
import { NavLink } from "react-router-dom"
import './Dialogs.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return <div className='dialog'>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className='messages'>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Goblin' },
        { id: 2, name: 'Gremlin' },
        { id: 3, name: 'Golem' },
        { id: 4, name: 'Goblet' },
        { id: 5, name: 'Gobble' }
    ]

    let messagesData = [
        { id: 1, message: 'I am green!' },
        { id: 2, message: 'I am from subway!' },
        { id: 3, message: 'I made from stone!' },
        { id: 4, message: 'I made from gold!' },
        { id: 5, message: 'I love to eat!' }
    ]


    return (
        <div className='dialogs'>
            <div className='dialogsItem'>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div>
                <Message message={messagesData[0].message} id={messagesData[0].id} />
                <Message message={messagesData[1].message} id={messagesData[1].id} />
                <Message message={messagesData[2].message} id={messagesData[2].id} />
                <Message message={messagesData[3].message} id={messagesData[3].id} />
                <Message message={messagesData[4].message} id={messagesData[4].id} />
            </div>
        </div>
    )
}

export default Dialogs