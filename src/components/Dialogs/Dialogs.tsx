import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Message/Message";


export type DialogPropsType = {
    name: string
    id: string
}
export type MessagePropsType = {
    message: string
    id: string
}

type  DialogsPropsType = {
    dialogsData : DialogPropsType[]
    messagesData : MessagePropsType[]
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogsData.map(dialog => {
                    return (
                        <DialogItem name={dialog.name} id={dialog.id}/>
                    )
                })}
            </div>
            <div className={classes.messages}>
                <div className={classes.dialog}>
                    {props.messagesData.map(message => {
                        return (
                            <Message message={message.message} id={message.id}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}