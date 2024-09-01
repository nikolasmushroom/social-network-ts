import React, {useState} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Message/Message";
import {v1} from "uuid";


export type DialogPropsType = {
    name: string
    id: string
}
export type MessagePropsType = {
    message: string
    id: string
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