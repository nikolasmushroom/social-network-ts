import {ActionTypes, DialogsPageType} from "./State";
import {v1} from "uuid";

export const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE' : {
            state.newMessageText = action.newMessage
            return
        }
        case 'SEND-MESSAGE' : {
            let text = state.newMessageText
            state.newMessageText = ''
            if (text) {
                state.messages.push({id: v1(), message: text})
            }
            return
        }
    }
    return state
}