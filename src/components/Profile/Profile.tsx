import React from 'react'
import classes from '../Profile/Profile.module.css'
import MyPosts from '../Profile/MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posted={''} likes={0}/>
        </div>
    )
}

export default Profile