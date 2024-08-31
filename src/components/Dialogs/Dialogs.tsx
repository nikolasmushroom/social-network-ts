import React, {useState} from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {v1} from "uuid";

type DialogPropsType = {
    name: string
    id: string
}
type MessagePropsType = {
    message: string
}
const DialogItem = ({name, id}: DialogPropsType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}
const Message = ({message} : MessagePropsType) => {
    return (
        <div className={classes.dialog}>{message}</div>
    )
}

export const Dialogs: React.FC = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={'Igor'} id={v1()}/>
                <DialogItem name={'Viktor'} id={v1()}/>
                <DialogItem name={'Vlad'} id={v1()}/>
                <DialogItem name={'Dasha'} id={v1()}/>

            </div>
            <div className={classes.messages}>
                <div className={classes.dialog}>
                    <Message message={'Hi'}/>
                    <Message message={'How is your day?'}/>
                    <Message message={'How are you?'}/>
                    <Message message={'Whats wrong with you?'}/>
                </div>
            </div>
        </div>
    )
}