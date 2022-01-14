import React from 'react'
import classes from '../Profile/Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePageType} from "../../redux/reduxStore";

export type PropsType = {
    profilePage: ProfilePageType
}

function Profile(props: PropsType) {
    return (
        <div className={classes.content}>
            <ProfileInfo profilePage={props.profilePage}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile