import React from "react"
import reactCover from './../../Assets/Images/reactCover.jpg'
import MyPosts from "./MyPosts/MyPosts"

const Profile = () => {
    return (
       
        <div>
        <div><img src={reactCover} /></div>
        <div>Avatar + Content</div>
       <MyPosts />
      </div>
        
    )
}

export default Profile