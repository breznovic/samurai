import React from "react"
import './Dialogs.css'

const Dialogs = (props) => {
    return (
        <div className='dialogs'>
            <div className='dialogsItem'>
                <div className='dialog'>Goblin</div>
                <div className='dialog'>Gremlin</div>
                <div className='dialog'>Golem</div>
                <div className='dialog'>Goblet</div>
                <div className='dialog'>Gobble</div>
            </div>
            <div className='messages'>
                <div>I am green!</div>
                <div>I am from subway!</div>
                <div>I made from stone!</div>
                <div>I made from gold!</div>
                <div>I love to eat!</div>
            </div>
        </div>
    )
}

export default Dialogs