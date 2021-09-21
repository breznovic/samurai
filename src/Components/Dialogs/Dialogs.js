import React from 'react'
import { NavLink } from 'react-router-dom'
import './Dialogs.css'

const Dialogs = (props) => {
    return (
        <div className='dialogs'>
            <div className='dialogItem'>
                <div className='dialog'>
                    <NavLink to='/dialogs/1'>Merlin</NavLink>
                    </div>
                <div className='dialog'>
                <NavLink to='/dialogs/2'>Gremlin</NavLink>
                    </div>
                <div className='dialog'>
                <NavLink to='/dialogs/3'>Goblin</NavLink>
                    </div>
                <div className='dialog'>
                <NavLink to='/dialogs/4'>Goblet</NavLink>
                    </div>
                <div className='dialog'>
                <NavLink to='/dialogs/5'>Magician</NavLink>
                    </div>
                </div>
                <div className='messages'>
                <div className='messages'>Hei ho</div>
                    <div className='messages'>Litle know</div>
                    <div className='messages'>Middle Big</div>
                </div>
        </div>
    )
}

export default Dialogs