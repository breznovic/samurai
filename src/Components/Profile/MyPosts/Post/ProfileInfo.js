import React from 'react'
import './ProfileInfo.css'
import reactCover from './../../../../Assets/Images/reactCover.jpg'

const ProfileInfo = (props) => {
    return (
    <div>
<div><img src={reactCover} /></div>
<div className='descriptionBlock'>Avatar + Content</div>
    </div>
    )
  }
  
export default ProfileInfo
