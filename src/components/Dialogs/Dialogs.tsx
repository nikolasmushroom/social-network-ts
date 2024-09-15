import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Message/Message";
import {DialogsPageType} from "../Redux/store";

export const Dialogs: React.FC<DialogsPageType> = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogs.map(dialog => {
                    return (
                        <DialogItem image={dialog.image} name={dialog.name} id={dialog.id}/>
                    )
                })}
            </div>
            <div className={classes.messages}>
                <div className={classes.dialog}>
                    {props.messages.map(message => {
                        return (
                            <Message message={message.message} id={message.id}/>
                        )
                    })}
                </div>
                <div>
                    <textarea onChange={(e) => props.dispatch({type : 'UPDATE-NEW-MESSAGE', newMessage : e.currentTarget.value})}></textarea>
                    <button onClick={() => props.dispatch({type : 'SEND-MESSAGE'})}>Send Message</button>
                </div>
            </div>
        </div>
    )
}