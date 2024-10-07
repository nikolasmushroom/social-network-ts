import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Message/Message";
import {DialogsContainerType} from "../Redux/store";
import {Navigate} from "react-router-dom";

export const Dialogs = ({
                            dialogs,
                            messages,
                            newMessageText,
                            updateNewMessage,
                            sendMessage,
                            isAuth,
                        }: DialogsContainerType) => {
    if (!isAuth) {
        return <Navigate to={'/login'}/>
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogs.map((dialog) => {
                    return (
                        <DialogItem key={dialog.id} image={dialog.image} name={dialog.name} id={dialog.id}/>
                    )
                })}
            </div>
            <div className={classes.messages}>
                <div className={classes.dialog}>
                    {messages.map(message => {
                        return (
                            <Message key={message.id} message={message.message} id={message.id}/>
                        )
                    })}
                </div>
                <div>
                    <textarea onChange={(e) => {
                        updateNewMessage(e.currentTarget.value)
                    }} value={newMessageText}></textarea>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}