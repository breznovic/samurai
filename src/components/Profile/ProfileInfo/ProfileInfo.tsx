import React from 'react'
import classes from './ProfileInfo.module.css'
import lake from '../../../Assets/Images/lake.jpg'
import {ProfilePageType} from "../../../redux/reduxStore";
import Preloader from "../../Common/Preloader";

type PropsType = {
    profilePage: ProfilePageType
}

function ProfileInfo(props: PropsType) {
    if (!props.profilePage.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={lake}/>
            </div>
            <div className={classes.item}>
                <img src={props.profilePage.profile?.photos.large}/>
                Avatar + Description
            </div>
        </div>
    )
}

export default ProfileInfo