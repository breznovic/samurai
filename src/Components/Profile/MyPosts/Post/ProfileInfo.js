import React from 'react'
import Preloader from '../../../Common/Preloader/Preloader'
import './ProfileInfo.css'

const ProfileInfo = (props) => {
    
  if(!props.profile) {
    return <Preloader />
  }
  
  return (
        <div>
           
        <div>
          <img src='https://worksolutions.ru/storage/UxBYDUfBNl9RfD5r6wMDvAWke3mGTfZaDcmHGZWc.png'/>
        </div>
        <div className='descriptionBlock'>
          <img src={props.profile.photos.large} />
          Avatar + description</div>
        </div>
     
        
    )
}

export default ProfileInfo
