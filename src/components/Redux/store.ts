import {v1} from "uuid";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type StoreType = {
    _state: RootStateType,
    _onChange: () => void
    getState: () => RootStateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = AddPostActionType | ChangeInputActionType | UpdateNewMessageType | SendMessage;

export type AddPostActionType = {
    type: 'ADD-POST',
    inputValue: string
}
export type ChangeInputActionType = {
    type: 'CHANGE-INPUT',
    newInput: string
}
export type UpdateNewMessageType = {
    type: 'UPDATE-NEW-MESSAGE',
    newMessage: string
}
export type SendMessage = {
    type: 'SEND-MESSAGE'
}

export const store: StoreType = {
    _state: {
        dialogsPage: <DialogsPageType>{
            dialogs: <DialogType[]>[
                {
                    id: v1(),
                    image: 'https://d2q9lphzn5ioni.cloudfront.net/uploads/2024/02/ai-generated-people-beautiful-girl.webp',
                    name: 'Hannah'
                },
                {
                    id: v1(),
                    image: 'https://cdnstorage.sendbig.com/unreal/female.webp',
                    name: 'Jane'
                },
                {
                    id: v1(),
                    image: 'https://live.staticflickr.com/65535/50999002523_08e4353b95.jpg',
                    name: 'Vlad'
                },
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
            newMessageText: ''
        },
        profilePage: {
            posts: <PostType[]>[
                {id: v1(), message: 'Hello, its me', likesCount: 12},
                {id: v1(), message: 'My favorite color is red', likesCount: 5},
                {id: v1(), message: 'Hello, its me', likesCount: 1},
                {id: v1(), message: 'Hello, its me', likesCount: 2},
            ],
            inputValue: '',
        },
        navigationPage: <NavigationType>{}
    },
    _onChange() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._onChange = callback
    },
    dispatch(action: ActionTypes) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navigationPage = sidebarReducer(this._state.navigationPage, action);

        this._onChange()
    }
}
export type DialogType = {
    id: string
    image: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    dispatch: (ActionTypes: ActionTypes) => void
    newMessageText?: string
}
// --------------------------------------------------------------------------------------------------------------------//
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfileType = {
    dispatch: (ActionTypes: ActionTypes) => void
    posts: PostType[]
    inputValue: string
}
export type ProfilePageType = {
    posts: PostType[]
    inputValue: string
}
// --------------------------------------------------------------------------------------------------------------------//
export type NavigationType = {}
// --------------------------------------------------------------------------------------------------------------------//

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    navigationPage: NavigationType
}


declare global {
    interface Window {
        store: typeof store;
    }
}

window.store = store
