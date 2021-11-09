import React from 'react'
import classes from '../Profile/Profile.module.css'
import lake from '../../Assets/Images/lake.jpg'
import MyPosts from '../Profile/MyPosts/MyPosts'

function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img src={lake}/>
            </div>
            <div className={classes.item}>
                Avatar + Description
            </div>
         <MyPosts posted={''} likes={0}/>
        </div>
    )
}

export default Profile