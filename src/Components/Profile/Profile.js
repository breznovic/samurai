import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./MyPosts/Post/ProfileInfo"
import './Profile.css'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <div>
                <MyPosts posts={props.profilePage.posts} 
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch} />
            </div>
        </div>
    )
}

export default Profile