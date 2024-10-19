import React from "react";
import classes from './ProfileInfo.module.css';
import background from '../../../asserts/images/background-profile.jpg'
import {Preloader} from "../../common/Preloader";
import {ProfilePropsType} from "../Profile";
import {ProfileStatus} from "../ProfileStatus";
import avatar from './../../../asserts/avatars/defaultUserImage.png';

const ProfileInfo = ({profile, status, updateUserStatus} : ProfilePropsType) => {
    if(!profile){
        return <Preloader/>
    }
    return (
        <div className={classes.content}>
            <div className={classes.background}>
                <img
                    src={background}
                    alt="background"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img className={classes.avatarImage} src={profile.photos.large || profile.photos.small ? profile.photos.large || profile.photos.small : avatar} alt="avatar"/>
                <div className={classes.about}>
                    <div className={classes.fullNameAndAboutMe}>
                        <div className={classes.fullName}>{profile.fullName}</div>
                        <ProfileStatus className={classes.aboutMe} status={status} updateUserStatus={updateUserStatus}/>
                    </div>
                    <div className={classes.jobStatus}>
                        <div>Job status : {profile.lookingForAJob ? 'search' : 'employed'}</div>
                        <div>Description : {profile.lookingForAJobDescription}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;