import React, {ChangeEvent} from "react";
import {DialogsType} from "../Redux/store";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
export const DialogsContainer = ({store} : DialogsType) => {
    const state = store.getState().dialogsPage
    const dialogs = state.dialogs
    const messages = state.messages
    const updateNewMessage = (e : ChangeEvent<HTMLTextAreaElement>) => {
        store.dispatch(updateNewMessageActionCreator(e.currentTarget.value))
    }
    const sendMessage = () => {
        store.dispatch(sendMessageActionCreator())
    }

    return (
       <Dialogs messages={messages} dialogs={dialogs} updateNewMessage={updateNewMessage} sendMessage={sendMessage}/>
    )
}