import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPosts}  from "./MyPosts/MyPosts";
import {ProfileType} from "../Redux/State";
const Profile : React.FC<ProfileType> = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} changeInput={props.changeInput} addNewPost={props.addNewPost} inputValue={props.inputValue}/>
        </div>
    )
}

export default Profile