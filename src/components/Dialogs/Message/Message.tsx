import classes from "./../Dialogs.module.css";
import React from "react";
import {MessageType} from "../../Redux/store";

const Message : React.FC<MessageType>= (props ) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}

export default Message