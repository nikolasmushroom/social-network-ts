import {ActionTypes, DialogsPageType} from "./store";
import {v1} from "uuid";

export const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE' : {
            state.newMessageText = action.newMessage
            return state
        }
        case 'SEND-MESSAGE' : {
            let text = state.newMessageText
            state.newMessageText = ''
            if (text) {
                state.messages.push({id: v1(), message: text})
            }
            return state
        }
    }
    return state;
}