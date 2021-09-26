import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './MyPosts/Post/ProfileInfo'
import './Profile.css'

const Profile = (props) => {

  return (

    <div className='content'>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>


  )
}

export default Profile
