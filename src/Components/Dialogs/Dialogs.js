import React from 'react'
import './Dialogs.css'
import DialogItem from './DialogItem'
import Message from './Message.js'

const Dialogs = (props) => {
    return (
        <div className='dialogs'>
            <div>
                <div className='dialogItem'>
                    <DialogItem name='Merlin' id='1' />
                    <DialogItem name='Gremlin' id='2' />
                    <DialogItem name='Goblin' id='3' />
                    <DialogItem name='Goblet' id='4' />
                    <DialogItem name='Gobelen' id='5' />
                </div>
            </div>
            <div>
            <Message message='Hei ho'/>
            <Message message='Little Know'/>
            <Message message='Middle Big'/>
            <Message message='Here was a big trouble'/>
            </div>
        </div>

    )
}

export default Dialogs