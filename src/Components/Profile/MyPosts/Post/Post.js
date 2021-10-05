import React from "react"
import './Post.css'
import tilezoom from './../../../../Assets/Images/tilezoom.jpeg'


const Post = (props) => {
    return (
                <div className='item'>
                    <img src={tilezoom} />
                    {props.message}
                    <div>
                    <span>Like: {props.like}</span>
                    </div>
                </div>
    )
}

export default Post
