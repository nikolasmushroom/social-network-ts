import {v1} from "uuid";
import {rerenderEntireTree} from "../../render";

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
}
// --------------------------------------------------------------------------------------------------------------------//
export type PostType = {
    id : string
    message : string
    likesCount : number
}
export type ProfileType = {
    posts : PostType[]
    addNewPost : (postMessage : string) => void
    inputValue : string
    changeInput : (newInput: string) => void
}
export type ProfilePageType = {
    posts : PostType[]
    inputValue : string
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
            {id: v1(), image: 'https://d2q9lphzn5ioni.cloudfront.net/uploads/2024/02/ai-generated-people-beautiful-girl.webp', name: 'Hannah'},
            {id: v1(), image: 'https://cdnstorage.sendbig.com/unreal/female.webp', name: 'Jane'},
            {id: v1(), image: 'https://live.staticflickr.com/65535/50999002523_08e4353b95.jpg', name: 'Vlad'},
            {id: v1(), image: 'https://images.unsplash.com/photo-1712847333453-740d9665aa5d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Farhad'},
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
        ],
        inputValue : '',
    },
    navigationPage: <NavigationType>{

    }
}
export const addPost = (postMessage : string) => {
    const newPost : PostType = {
        id: v1(),
        message : postMessage,
        likesCount : 0,
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export const changeInput = (newInput : string) => {
    state.profilePage.inputValue = newInput
    rerenderEntireTree(state)
}