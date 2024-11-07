import classes from "../ProfileInfo.module.css";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";
import React from "react";
import {Button} from "../../../../../../common/components/Button/Button";
import {useSelector} from "react-redux";
import {RootReduxStateType} from "../../../../../../app/store/redux-store";

export type AboutMePropsType = {
    isOwner?: boolean
    switchEditMode: () => void
}
export const ProfileData = ({isOwner, switchEditMode}: AboutMePropsType) => {
    const error = useSelector((state : RootReduxStateType) => state.profilePage.error)
    const profile = useSelector((state : RootReduxStateType) => state.profilePage.profile)
    return (
        <div className={classes.about}>
            <div className={classes.profileInfoWrapper}>
                <div className={classes.fullNameAndAboutMe}>
                    <div className={classes.fullName}>{profile.fullName}</div>
                    <ProfileStatus className={classes.aboutMe}/>
                </div>
                <div className={classes.jobStatus}>
                    <div>Job status : {profile.lookingForAJob ? 'search' : 'employed'}</div>
                    <div>Description
                        : {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'No description'}</div>
                </div>
                <div>
                    <div>About me : {profile.aboutMe}</div>
                </div>
            </div>
            <div className={classes.contacts}>
                <div>
                    <span>facebook: {profile.contacts.facebook || '-'}</span>
                    <span>website: {profile.contacts.website || '-'}</span>
                    <span>vk: {profile.contacts.vk || '-'}</span>
                    <span>twitter: {profile.contacts.twitter || '-'}</span>
                </div>
                <div>
                    <span>youtube: {profile.contacts.youtube || '-'}</span>
                    <span>github: {profile.contacts.github || '-'}</span>
                    <span>instagram: {profile.contacts.instagram || '-'}</span>
                    <span>mainLink: {profile.contacts.mainLink || '-'}</span>
                </div>
            </div>
            {isOwner && <Button onClick={switchEditMode}>Edit</Button>}
            {error && <div>{error}</div>}
        </div>
    )
}