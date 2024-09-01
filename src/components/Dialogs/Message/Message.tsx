import classes from "./../Dialogs.module.css";
import React from "react";
import {MessagePropsType} from "../Dialogs";

const Message = ({message, id}: MessagePropsType) => {
    return (
        <div className={classes.dialog}>{message}</div>
    )
}

export default Message