import {
    ActionTypes,
    AddPostActionType,
    ChangeInputActionType,
    PostType,
    ProfilePageType, ProfileType, savePhotoType, setStatusType,
    setUserProfileType
} from "../../../app/store/store";
import {v1} from "uuid";
import {usersAPI} from "../../users/api/usersAPI";
import {profileAPI} from "../api/profileAPI";
import {AppDispatch} from "../../../app/store/redux-store";

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
        aboutMe: '',
        contacts: {
            "facebook": '',
            "website": '',
            "vk": '',
            "twitter": '',
            "instagram": '',
            "youtube": '',
            "github": '',
            "mainLink": ''
        },
        "lookingForAJob": false,
        "lookingForAJobDescription": '',
        "fullName": '',
        "userId": 0,
        "photos": {
            "small": '',
            "large": ''
        }
    },
    status: '',
    error: ''
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
                ...state,
                profile: {
                    ...action.profile,
                    contacts: {
                        ...action.profile.contacts
                    }
                },
            };
        case SET_STATUS:
            return {
                ...state, status: action.newStatus
            }

        case 'DELETE_POST' :
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            };
        case 'SAVE_PHOTO' :
            return {
                ...state, profile: {...state.profile, photos: action.file}
            }
        case 'SET_PROFILE_ERROR':
            return {
                ...state, error : action.error
            }
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
export const savePhotoActionCreator = (file: any): savePhotoType => ({
    type: "SAVE_PHOTO",
    file: file
}) as const
export const setProfileError = (error: string) => ({
    type: "SET_PROFILE_ERROR",
    error: error
}) as const
export const getUserProfile = (userId: string, isAuth: boolean) => async (dispatch: AppDispatch)  => {
    if (isAuth) {
        const response = await usersAPI.getUserProfile(userId)
        dispatch(setUserProfileActionCreator(response.data))
    }
}
export const getUserStatus = (userId: string) => async (dispatch: AppDispatch) => {
    const response = await profileAPI.getUserStatus(parseInt(userId))
    dispatch(setStatusActionCreator(response.data))
}
export const updateUserStatus = (status: string) => async (dispatch: AppDispatch) => {
    const response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusActionCreator(status))
    }
}
export const updateUserProfile = (profile: ProfileType) => (dispatch: AppDispatch) => {
    return profileAPI.updateUserProfileData(profile)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserProfileActionCreator(profile))
                dispatch(setProfileError(''))
            } else {
                dispatch(setProfileError(response.data.messages.toString()))
            }
        })
}
export const savePhoto = (file: File) => async (dispatch: AppDispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoActionCreator(response.data.data.photos))
    }
}

