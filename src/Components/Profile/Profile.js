import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './MyPosts/Post/ProfileInfo'
import './Profile.css'

const Profile = (props) => {

  return (

    <div className='content'>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </div>


  )
}

export default Profile
