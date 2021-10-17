import React from 'react'
import './ProfileInfo.css'
import reactCover from './../../../../Assets/Images/reactCover.jpg'
import Preloader from '../../../Common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
if (!props.profile) {
  return <Preloader />
}

    return (
    <div>
{/* <div><img src={reactCover}/></div> */}
<div className='descriptionBlock'>
  <img src={props.profile.photos.large} />
    <ProfileStatus status={'Hello there!'}/>
  </div>
    </div>
    )
  }
  
export default ProfileInfo
