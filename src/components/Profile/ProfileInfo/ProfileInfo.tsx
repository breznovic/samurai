import React from 'react'
import classes from './ProfileInfo.module.css'
import {ProfilePageType} from "../../../redux/reduxStore";
import Preloader from "../../Common/Preloader";
import ProfileStatus from "./ProfileStatus";

type PropsType = {
    profilePage: ProfilePageType
    updateStatus: (status: string) => void
}

function ProfileInfo(props: PropsType) {
    if (!props.profilePage.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.item}>
                <img src={props.profilePage.profile?.photos.large}/>
               <ProfileStatus status={props.profilePage.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo