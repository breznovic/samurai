import React from 'react'
import classes from './Post.module.css'
import monkey from '../../../../Assets/Images/monkey.jpg'
import {PostPropsType} from "../../../../redux/reduxStore";

function Post(props: PostPropsType) {
    return (

        <div className={classes.item}>
            <div>
                <img src={monkey}/>
            </div>
            {props.posted}
            <div>
            <span>like </span>{props.likes}
            </div>
        </div>
    )
}

export default Post