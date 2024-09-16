import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPosts}  from "./MyPosts/MyPosts";
import {ProfileType} from "../Redux/store";
const Profile : React.FC<ProfileType> = ({posts, dispatch, inputValue}) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={posts} dispatch={dispatch} inputValue={inputValue}/>
        </div>
    )
}

export default Profile