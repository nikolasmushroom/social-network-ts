import React from "react";
import classes from './ProfileInfo.module.css';
import background from '../../../asserts/images/background-image.png'

const ProfileInfo: React.FC = () => {
    return (
        <div className={classes.content}>
            <div className={classes.img}>
                <img
                    src={background}
                    alt="background"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + des
            </div>
        </div>
    )
}

export default ProfileInfo;