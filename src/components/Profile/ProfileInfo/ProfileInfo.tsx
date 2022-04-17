import React, {ChangeEvent} from 'react'
import classes from './ProfileInfo.module.css'
import {ProfilePageType} from "../../../redux/reduxStore";
import Preloader from "../../Common/Preloader";
import ProfileStatus from "./ProfileStatus";
import profile from "../Profile";
import {updateStatus} from "../../../redux/profileReducer";
import userPhoto from "../../assets/images/user.png";
import {savePhoto, isOwner} from '../ProfileContainer'


type PropsType = {
    profilePage: ProfilePageType
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: PropsType) => {

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={classes.mainPhoto} />
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo