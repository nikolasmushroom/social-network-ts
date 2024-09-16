import classes from "./../Dialogs.module.css";
import React from "react";
import {MessageType} from "../../Redux/store";

const Message : React.FC<MessageType>= ({message} ) => {
    return (
        <div className={classes.dialog}>{message}</div>
    )
}

export default Message