import React, {useEffect} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./DialogMessage/Message";
import {DialogsContainerType} from "../../../../app/store/store";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootReduxStateType} from "../../../../app/store/redux-store";
import {sendMessage, updateNewMessage} from "../../model/dialogs-reducer";
import {useNavigate} from "react-router-dom";

export const Dialogs = ({}: DialogsContainerType) => {
    const dialogs = useSelector((state: RootReduxStateType) => state.dialogsPage.dialogs)
    const messages = useSelector((state: RootReduxStateType) => state.dialogsPage.messages)
    const newMessageText = useSelector((state: RootReduxStateType) => state.dialogsPage.newMessageText)
    const isAuth = useSelector((state: RootReduxStateType) => state.auth.isAuth)
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        if (!isAuth) {
            return navigate('/login')
        }
    }, [isAuth])
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
                        dispatch(updateNewMessage(e.currentTarget.value))
                    }} value={newMessageText}></textarea>
                    <button onClick={() => dispatch(sendMessage)}>Send Message</button>
                </div>
            </div>
        </div>
    )
}