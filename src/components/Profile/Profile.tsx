import React from 'react'
import classes from '../Profile/Profile.module.css'
import MyPosts from '../Profile/MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

function Profile(props: ProfilePageType) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} />
        </div>
    )
}

export default Profile