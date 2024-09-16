import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../Redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
const Profile  = (store : any) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </div>
    )
}

export default Profile