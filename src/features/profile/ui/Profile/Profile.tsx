import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../../../app/store/store";
export type ProfilePropsType = {
    profile : ProfileType
    status : string
    updateUserStatus : (status: string) => void

}
const  Profile= React.memo(({profile, status, updateUserStatus} : ProfilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
})

export default Profile