import React from 'react'
import classes from './ProfileInfo.module.css'
import lake from '../../../Assets/Images/lake.jpg'

function ProfileInfo() {
    return (
        <div>
            <div>
                <img src={lake}/>
            </div>
            <div className={classes.item}>
                Avatar + Description
            </div>
        </div>
    )
}

export default ProfileInfo