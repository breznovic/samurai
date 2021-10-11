import React from "react"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./MyPosts/Post/ProfileInfo"
import './Profile.css'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <div>
                <MyPostsContainer store={props.store} />
            </div>
        </div>
    )
}

export default Profile