import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogType} from "../../Redux/State";

const DialogItem : React.FC<DialogType> = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img src={props.image} alt={props.name} className={classes.dialogAvatar}/>
            <NavLink to={`/dialogs/${props.id}`} className={classes.dialog}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem