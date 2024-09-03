import {v1} from "uuid";

export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
// --------------------------------------------------------------------------------------------------------------------//
export type PostType = {
    id : string
    message : string
    likesCount : number
}
export type ProfilePageType = {
    posts : PostType[]
}
// --------------------------------------------------------------------------------------------------------------------//
export type NavigationType = {

}
// --------------------------------------------------------------------------------------------------------------------//

export type RootStateType = {
    dialogsPage : DialogsPageType
    profilePage : ProfilePageType
    navigationPage: NavigationType
}

export const state : RootStateType = {
    dialogsPage: <DialogsPageType> {
        dialogs : <DialogType[]> [
            {id: v1(), name: 'Igor'},
            {id: v1(), name: 'Viktor'},
            {id: v1(), name: 'Vlad'},
            {id: v1(), name: 'Dasha'},
        ],
        messages: <MessageType[]>[
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How is your day?'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'Whats wrong with you?'},
        ]
    },
    profilePage: {
        posts: <PostType[]> [
            {id : v1(),  message : 'Hello, its me', likesCount: 12},
            {id : v1(),  message : 'My favorite color is red', likesCount: 5},
            {id : v1(),  message : 'Hello, its me', likesCount: 1},
            {id : v1(),  message : 'Hello, its me', likesCount: 2},
        ]
    },
    navigationPage: <NavigationType>{

    }
}