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
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText} />
            </div>
        </div>
    )
}

export default Profile