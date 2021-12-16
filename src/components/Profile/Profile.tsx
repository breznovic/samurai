import React from 'react'
import classes from '../Profile/Profile.module.css'
import MyPosts from '../Profile/MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostPropsType, ProfilePageType} from "../../redux/state";

type PropsType = {
    posts: Array<PostPropsType>
    newPost: string
    dispatch: (action: ActionsTypes) => void
}

function Profile(props: PropsType) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPost={props.newPost} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile