import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../../../app/store/store";
export type ProfilePropsType = {
    isOwner : boolean
    profile : ProfileType
    status : string
    updateUserStatus : (status: string) => void
    savePhoto: (file: any) => void
    updateUserProfile: (profile: ProfileType, setError? : any) => void
}
const  Profile= React.memo(({updateUserProfile, isOwner, profile, status, updateUserStatus, savePhoto} : ProfilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo updateUserProfile={updateUserProfile} isOwner={isOwner} profile={profile} status={status} updateUserStatus={updateUserStatus} savePhoto={savePhoto}/>
            <MyPostsContainer/>
        </div>
    )
})

export default Profile