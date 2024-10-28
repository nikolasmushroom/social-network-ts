import React, {useState} from "react";
import classes from './ProfileInfo.module.css';
import background from '../../../../../asserts/images/background-profile.jpg'
import {Preloader} from "../../../../../common/components/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import avatar from '../../../../../asserts/avatars/defaultUserImage.png';
import {Button} from "../../../../../common/components/Button/Button";
import {ProfileData, } from "./ProfileData/ProfileData";
import {ProfileDataForm} from "./ProfileData/ProfileDataForm";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, updateUserProfile}: ProfilePropsType) => {
    const [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            savePhoto(e.currentTarget.files[0]);
        }
    }
    const switchEditMode = () => {
        setEditMode(!editMode)
    }
    return (
        <div className={classes.content}>
            <div className={classes.background}>
                <img
                    src={background}
                    alt="background"/>
            </div>
            <div className={classes.descriptionBlock}>
                <div className={classes.imageContainer}>
                    <img className={classes.avatarImage} src={profile.photos.large ? profile.photos.large : avatar}
                         alt="avatar"/>
                    {isOwner && <div className={classes.fileInputContainer}>
                        <Button className={classes.fileInputLabel}>Add photo</Button>
                        <input type={'file'} onChange={(event) => onMainPhotoSelected(event)}
                               className={classes.changePhoto}/>
                    </div>
                    }
                </div>
                {!editMode ? <ProfileData updateUserProfile={updateUserProfile} switchEditMode={switchEditMode} isOwner={isOwner} profile={profile} status={status} updateUserStatus={updateUserStatus}/> : <ProfileDataForm switchEditMode={switchEditMode} profile={profile} status={status} updateUserStatus={updateUserStatus} updateUserProfile={updateUserProfile}/>}

            </div>

        </div>
    )
}

export default ProfileInfo;