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
    id: string
}
const DialogItem = ({name, id}: DialogPropsType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}
const Message = ({message, id}: MessagePropsType) => {
    return (
        <div className={classes.dialog}>{message}</div>
    )
}

export const Dialogs: React.FC = () => {
    let dialogsData = [
        {id: v1(), name: 'Igor'},
        {id: v1(), name: 'Viktor'},
        {id: v1(), name: 'Vlad'},
        {id: v1(), name: 'Dasha'},
    ]
    let messagesData = [
        {id: v1(), message : 'Hi'},
        {id: v1(), message : 'How is your day?'},
        {id: v1(), message : 'How are you?'},
        {id: v1(), message : 'Whats wrong with you?'},
    ]
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsData.map(dialog => {
                    return (
                        <DialogItem name={dialog.name} id={dialog.id}/>
                    )
                })}
            </div>
            <div className={classes.messages}>
                <div className={classes.dialog}>
                    {messagesData.map(message => {
                        return (
                            <Message message={message.message} id={message.id}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}