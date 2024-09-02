import React, {useState} from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {PostPropsType} from "./MyPosts/Post/Post";
export type ProfilePropsType = {
    posts: PostPropsType[]
    changePostsHandler : (posts : PostPropsType[]) => void
}
const Profile : React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} changePostsHandler={props.changePostsHandler}/>
        </div>
    )
}

export default Profile