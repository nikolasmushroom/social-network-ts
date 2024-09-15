import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPosts}  from "./MyPosts/MyPosts";
import {ProfileType} from "../Redux/store";
const Profile : React.FC<ProfileType> = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} dispatch={props.dispatch} inputValue={props.inputValue}/>
        </div>
    )
}

export default Profile