
import {ADD_POST, CHANGE_INPUT, SET_STATUS, SET_USER_PROFILE,} from "../../features/profile/model/profile-reducer";
import {UPDATE_NEW_MESSAGE, SEND_MESSAGE} from "../../features/dialogs/model/dialogs-reducer";
import {
    SET_CURRENT_PAGE,
    SET_MAX_COUNT,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    TOGGLE_FOLLOW_SOMEONE, TOGGLE_IS_FETCHING, TOGGLE_IS_FOLLOWING_PROGRESS,
} from "../../features/users/model/users-reducer";
import {SET_AUTH_ME, SET_LOADING, SET_USER_DATA} from "../../features/login/model/auth-reducer";

//
// export type StoreType = {
//     _state: RootStateType,
//     _onChange: () => void
//     getState: () => RootStateType
//     subscribe: (callback: () => void) => void
//     dispatch: (action: ActionTypes) => void
// }

export type ActionTypes =
    AddPostActionType
    | ChangeInputActionType
    | UpdateNewMessageType
    | SendMessageType
    | toFollowSomeoneType
    | setUsersActionType
    | setCurrentPageType
    | setTotalUsersCountType
    | setMaxCountType
    | toggleIsFetchingType
    | setUserProfileType
    | setUserDataACType
    | toggleIsFollowingProgressType
    | setAuthMeType
    | setLoadingType
    | setStatusType
    | setErrorType
    | setInitializedType
    | deletePostType
    ;

export type AddPostActionType = {
    type: typeof ADD_POST,
    inputValue: string
}
export type ChangeInputActionType = {
    type: typeof CHANGE_INPUT,
    newInput: string
}
export type UpdateNewMessageType = {
    type: typeof UPDATE_NEW_MESSAGE,
    newMessage: string
}
export type SendMessageType = {
    type: typeof SEND_MESSAGE
}
export type toFollowSomeoneType = {
    type: typeof TOGGLE_FOLLOW_SOMEONE
    id: string
}
export type setUsersActionType = {
    type: typeof SET_USERS
    users: UserType[]
}
export type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    page: number
}
export type setTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
}
export type setMaxCountType = {
    type : typeof SET_MAX_COUNT,
    newCount : number
}
export type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export type setUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export type setUserDataACType = {
    type: typeof SET_USER_DATA,
    data : {
        userId : number,
        email : string,
        login: string
        isAuth: boolean
    }
}
export type toggleIsFollowingProgressType = {
    type : typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFollowing : boolean,
    userId : string
}
export type setAuthMeType = {
    type : typeof SET_AUTH_ME,

}
export type setLoadingType = {
    type : typeof SET_LOADING,
    isLoading : boolean
}
export type setStatusType = {
    type : typeof SET_STATUS,
    newStatus: string
}
export type setErrorType = {
    type : 'SET_ERROR',
    error : string
}
export type setInitializedType = {
    type: 'SET_INITIALIZED',
}
export type deletePostType = {
    type : 'DELETE_POST',
    id : string
}
//----------------------------------------------------------------------------------------------------------------------//
export type HeaderStateType = {
    userId : number,
    email: string,
    login: string
    isAuth: boolean,
    isLoading: boolean
    error: string
}
//----------------------------------------------------------------------------------------------------------------------//
export type FormStateType = {
    login : string,
    password : string
    rememberMe : boolean
    formErrors : {
        login? : string
        password? : string
    }
}
//---------------------------------------------------------------------------------------------------------------------//
// export const store: StoreType = {
//     _state: {
//         dialogsPage: <DialogsPageType>{
//             dialogs: <DialogType[]>[
//                 {
//                     id: v1(),
//                     image: 'https://d2q9lphzn5ioni.cloudfront.net/uploads/2024/02/ai-generated-people-beautiful-girl.webp',
//                     name: 'Hannah'
//                 },
//                 {
//                     id: v1(),
//                     image: 'https://cdnstorage.sendbig.com/unreal/female.webp', name: 'Jane'
//                 },
//                 {id: v1(), image: 'https://live.staticflickr.com/65535/50999002523_08e4353b95.jpg', name: 'Vlad'},
//                 {
//                     id: v1(),
//                     image: 'https://images.unsplash.com/photo-1712847333453-740d9665aa5d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//                     name: 'Farhad'
//                 },
//             ],
//             messages: <MessageType[]>[
//                 {id: v1(), message: 'Hi'},
//                 {id: v1(), message: 'How is your day?'},
//                 {id: v1(), message: 'How are you?'},
//                 {id: v1(), message: 'Whats wrong with you?'},
//             ],
//             newMessageText: ''
//         },
//         profilePage: {
//             posts: <PostType[]>[
//                 {id: v1(), message: 'Hello, its me', likesCount: 12},
//                 {id: v1(), message: 'My favorite color is red', likesCount: 5},
//                 {id: v1(), message: 'Hello, its me', likesCount: 1},
//                 {id: v1(), message: 'Hello, its me', likesCount: 2},
//             ],
//             inputValue: '',
//             profile: {}
//         },
//         navigationPage: <NavigationType>{}
//     },
//     _onChange() {
//         console.log('State changed')
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(callback) {
//         this._onChange = callback
//     },
//     dispatch(action: ActionTypes) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.navigationPage = sidebarReducer(this._state.navigationPage, action);
//
//         this._onChange()
//     }
// }
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
    newMessageText?: string
}
export type DialogsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
    updateNewMessage: (body: string) => void
    sendMessage: () => void
    isAuth : boolean
}
export type DialogsContainerType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
    updateNewMessage: (body: string) => void
    sendMessage: () => void
}
// --------------------------------------------------------------------------------------------------------------------//
export type ProfileType = {
    aboutMe : string,
    contacts : {
        "facebook": string,
        "website": null,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": null,
        "github": string,
        "mainLink": null
    },
    "lookingForAJob" : boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostType[]
    inputValue: string
    profile?: ProfileType
    status : string
}

// --------------------------------------------------------------------------------------------------------------------//
export type NavigationType = {}
// --------------------------------------------------------------------------------------------------------------------//
export type UsersStateType = {
    users: UserType[],
    isFetching: boolean,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    followingInProgress: string[]
}
export type UserType = {
    id: string
    name: string
    status: string
    photos: { small: string, large: string }
    followed: boolean
    // location: {city: string, country: string}
}
export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    navigationPage: NavigationType
}


// declare global {
//     interface Window {
//         store: typeof store;
//     }
// }
//
// window.store = store
