import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogPropsType} from "../Dialogs";

const DialogItem : React.FC<DialogPropsType> = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem