import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../asserts/avatars/defaultUserImage.png";
import {Button} from "../common/Button";
import React from "react";
import {UserType} from "../../Redux/store";
export type UserPropsType = {
    user : UserType
    followingInProgress: Array<string>
    changeFollowStatus: (u : UserType, followStatus : boolean) => void
}
export const User = ({user, changeFollowStatus, followingInProgress} : UserPropsType) => {
    return (
        <div className={styles.user} key={user.id}>
            <div className={styles.imageAndButton}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small ? user.photos.small : avatar} alt="avatar"/>
                </NavLink>
                <Button
                    disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => changeFollowStatus(user, !user.followed)}
                >{user.followed ? 'Unfollow' : 'Follow'}</Button>
            </div>
            <div className={styles.userProfile}>
                <div className={styles.nameAndStatus}>
                    <div className={styles.userName}>{user.name}</div>
                    <div className={styles.userStatus}>{user.status}</div>
                </div>
                <div className={styles.location}>
                    <div className={styles.userCountry}>{'Belarus,'}</div>
                    <div className={styles.userCity}>{'Minsk'}</div>
                </div>
            </div>
        </div>
    )
}