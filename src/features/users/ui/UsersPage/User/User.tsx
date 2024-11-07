import styles from "../Users.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../../../../asserts/avatars/defaultUserImage.png";
import {Button} from "../../../../../common/components/Button/Button";
import React from "react";
import {UserType} from "../../../../../app/store/store";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootReduxStateType} from "../../../../../app/store/redux-store";
import {changeFollowStatus} from "../../../model/users-reducer";
export type UserPropsType = {
    user : UserType
}
export const User = ({user} : UserPropsType) => {
    const dispatch = useDispatch<AppDispatch>()
    const followingInProgress = useSelector((state : RootReduxStateType) => state.usersPage.followingInProgress)
    return (
        <div className={styles.user} key={user.id}>
            <div className={styles.imageAndButton}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small ? user.photos.small : avatar} alt="avatar"/>
                </NavLink>
                <Button
                    disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => dispatch(changeFollowStatus(user, !user.followed))}
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