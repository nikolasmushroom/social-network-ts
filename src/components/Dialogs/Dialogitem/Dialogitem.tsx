import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogPropsType} from "../Dialogs";

const DialogItem = ({name, id}: DialogPropsType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}
export default DialogItem