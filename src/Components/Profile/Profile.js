import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import './Profile.css'

const Profile = () => {
    return (
        
           <div className='content'>
        <div>
          <img src='https://worksolutions.ru/storage/UxBYDUfBNl9RfD5r6wMDvAWke3mGTfZaDcmHGZWc.png'/>
        </div>
        <div>Avatar + description</div>
       <MyPosts />
        </div>
     
        
    )
}

export default Profile
