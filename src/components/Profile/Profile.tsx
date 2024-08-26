import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import background from '../../asserts/images/background-image.png'

const Profile : React.FC = () => {
    return (
        <div className={classes.content}>
            <div className={classes.img}>
                <img
                    src={background}
                    alt="background"/>
            </div>

            <div>
                ava + des
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;