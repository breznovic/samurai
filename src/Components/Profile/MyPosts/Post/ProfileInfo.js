import React from 'react'
import './ProfileInfo.css'
import reactCover from './../../../../Assets/Images/reactCover.jpg'
import Preloader from '../../../Common/Preloader/Preloader'

const ProfileInfo = (props) => {
if (!props.profile) {
  return <Preloader />
}

    return (
    <div>
<div><img src={reactCover}/></div>
<div className='descriptionBlock img3'>
  <img src={props.profile.photos.large} />
    Avatar + Content
  </div>
    </div>
    )
  }
  
export default ProfileInfo
