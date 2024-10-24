import {
    ActionTypes,
    AddPostActionType,
    ChangeInputActionType,
    PostType,
    ProfilePageType, ProfileType, setStatusType,
    setUserProfileType
} from "../../../app/store/store";
import {v1} from "uuid";
import {profileAPI, usersAPI} from "../../../api/api";

export const ADD_POST = "ADD-POST"
export const CHANGE_INPUT = "CHANGE-INPUT"
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'

const initialState: ProfilePageType = {
    posts: <PostType[]>[
        {id: v1(), message: 'Hello, its me', likesCount: 12},
        {id: v1(), message: 'My favorite color is red', likesCount: 5},
        {id: v1(), message: 'Hello, its me', likesCount: 1},
        {id: v1(), message: 'Hello, its me', likesCount: 2},
    ],
    inputValue: '',
    profile: {
        aboutMe: 'im fine',
        contacts: {
            "facebook": '',
            "website": null,
            "vk": '',
            "twitter": '',
            "instagram": '',
            "youtube": null,
            "github": '',
            "mainLink": null
        },
        "lookingForAJob": false,
        "lookingForAJobDescription": 'string',
        "fullName": 'string',
        "userId": 1,
        "photos": {
            "small": 'string',
            "large": 'string'
        }
    },
    status: '',
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: v1(), message: action.inputValue, likesCount: 0}],
                inputValue: ''
            };
        case CHANGE_INPUT:
            return {
                ...state,
                inputValue: action.newInput
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.newStatus
            }

        case 'DELETE_POST' :
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            };
        default:
            return state;
    }
};

export const addPost = (inputValue: string): AddPostActionType => ({
    type: ADD_POST,
    inputValue
})
export const deletePost = (id: string) => {
    return {
        type: 'DELETE_POST',
        id: id
    } as const
}
export const changeInput = (newInput: string): ChangeInputActionType => ({
    type: CHANGE_INPUT,
    newInput
})
export const setUserProfileActionCreator = (profile: ProfileType): setUserProfileType => ({
    type: SET_USER_PROFILE,
    profile: profile
})
export const setStatusActionCreator = (newStatus: string): setStatusType => ({
    type: SET_STATUS,
    newStatus: newStatus
})
export const getUserProfile = (userId: string, isAuth: boolean) => async (dispatch: any) => {
    if (isAuth) {
        const response = await usersAPI.getUserProfile(userId)
        dispatch(setUserProfileActionCreator(response.data))
    }
}
export const getUserStatus = (userId: string) => async (dispatch: any) => {
    const response = await profileAPI.getUserStatus(userId)
    dispatch(setStatusActionCreator(response.data))
}
export const updateUserStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusActionCreator(status))
    }
}
