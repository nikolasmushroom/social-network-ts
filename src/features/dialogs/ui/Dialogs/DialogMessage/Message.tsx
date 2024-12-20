import classes from "../Dialogs.module.css";
import React from "react";
import {MessageType} from "../../../../../app/store/store";

const Message : React.FC<MessageType>= ({message} ) => {
    return (
        <div className={classes.dialog}>{message}</div>
    )
}

export default Message