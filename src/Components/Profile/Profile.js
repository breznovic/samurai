import React from "react"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./MyPosts/Post/ProfileInfo"
import './Profile.css'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <div>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile