import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../Redux/store";
type ProfilePropsType = {
    profile? : ProfileType
}
const  Profile= ({profile} : ProfilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile