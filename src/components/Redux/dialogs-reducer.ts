import {ActionTypes, DialogsPageType, DialogType, MessageType, SendMessageType, UpdateNewMessageType} from "./store";
import {v1} from "uuid";

export const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
export const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState: DialogsPageType = {
    dialogs: <DialogType[]>[
        {
            id: v1(),
            image: 'https://d2q9lphzn5ioni.cloudfront.net/uploads/2024/02/ai-generated-people-beautiful-girl.webp',
            name: 'Hannah'
        },
        {
            id: v1(),
            image: 'https://cdnstorage.sendbig.com/unreal/female.webp', name: 'Jane'
        },
        {id: v1(), image: 'https://live.staticflickr.com/65535/50999002523_08e4353b95.jpg', name: 'Vlad'},
        {
            id: v1(),
            image: 'https://images.unsplash.com/photo-1712847333453-740d9665aa5d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Farhad'
        },
    ],
    messages: <MessageType[]>[
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your day?'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Whats wrong with you?'},
    ],
    newMessageText: '',
    dispatch: action => {

    },
}
export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE : {
            return {...state, newMessageText: action.newMessage}
            // return  state.newMessageText = action.newMessage
        }
        case SEND_MESSAGE : {
            let text = state.newMessageText
            if (text) {
                return {...state, newMessageText: '', messages: [...state.messages, {id: v1(), message: text}]};
            }
            return {
                ...state,
                newMessageText: ''
            };
            // state.newMessageText = ''
            // if (text) {
            //     state.messages.push({id: v1(), message: text})
            // }
            // return state
        }
    }
    return state;
}
export const updateNewMessageActionCreator = (newMessage: string) : UpdateNewMessageType => ({
    type: UPDATE_NEW_MESSAGE,
    newMessage: newMessage
})
export const sendMessageActionCreator = () : SendMessageType  => ({
    type : SEND_MESSAGE
})