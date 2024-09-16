import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogType} from "../../Redux/store";

const DialogItem : React.FC<DialogType> = ({id , image, name}) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img src={image} alt={name} className={classes.dialogAvatar}/>
            <NavLink to={`/dialogs/${id}`} className={classes.dialog}>{name}</NavLink>
        </div>
    )
}
export default DialogItem