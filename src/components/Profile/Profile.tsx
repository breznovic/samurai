import React from 'react'
import classes from '../Profile/Profile.module.css'
import MyPosts from '../Profile/MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostPropsType, ProfilePageType} from "../../redux/state";

type PropsType = {
    posts: Array<PostPropsType>
    addPost: (text:string) => void
}

function Profile(props: PropsType) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} />
        </div>
    )
}

export default Profile