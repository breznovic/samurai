import React from "react"
import './../Dialogs.css'

const Message = (props) => {
    return <div className='messages'>{props.message}</div>
}

export default Message