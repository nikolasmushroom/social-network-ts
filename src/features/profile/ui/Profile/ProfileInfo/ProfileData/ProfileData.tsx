import {ProfileType} from "../../../../../../app/store/store";
import classes from "../ProfileInfo.module.css";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";
import React from "react";
import {Button} from "../../../../../../common/components/Button/Button";

export type AboutMePropsType = {
    isOwner?: boolean
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    switchEditMode: () => void
    updateUserProfile: (profile: ProfileType) => void
}
export const ProfileData = ({profile, status, updateUserStatus, isOwner, switchEditMode}: AboutMePropsType) => {
    return (
        <div className={classes.about}>
            <div className={classes.profileInfoWrapper}>
                <div className={classes.fullNameAndAboutMe}>
                    <div className={classes.fullName}>{profile.fullName}</div>
                    <ProfileStatus className={classes.aboutMe} status={status} updateUserStatus={updateUserStatus}/>
                </div>
                <div className={classes.jobStatus}>
                    <div>Job status : {profile.lookingForAJob ? 'search' : 'employed'}</div>
                    <div>Description : {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'No description'}</div>
                </div>
            </div>
            <div className={classes.contacts}>
                <span>facebook: {profile.contacts.facebook || '-'}</span>
                <span>website: {profile.contacts.website || '-'}</span>
                <span>vk: {profile.contacts.vk || '-'}</span>
                <span>twitter: {profile.contacts.twitter || '-'}</span>
                <span>youtube: {profile.contacts.youtube || '-'}</span>
                <span>github: {profile.contacts.github || '-'}</span>
                <span>mainLink: {profile.contacts.mainLink || '-'}</span>
            </div>
            {isOwner && <Button onClick={switchEditMode}>Edit</Button>}
        </div>
    )
}