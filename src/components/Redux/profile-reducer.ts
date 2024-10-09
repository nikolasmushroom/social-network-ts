import {
    ActionTypes,
    AddPostActionType,
    ChangeInputActionType,
    PostType,
    ProfilePageType, ProfileType,
    setUserProfileType
} from "./store";
import {v1} from "uuid";
import {usersAPI} from "../../api/api";

export const ADD_POST = "ADD-POST";
export const CHANGE_INPUT = "CHANGE-INPUT";
export const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState : ProfilePageType = {
    posts: <PostType[]>[
        {id: v1(), message: 'Hello, its me', likesCount: 12},
        {id: v1(), message: 'My favorite color is red', likesCount: 5},
        {id: v1(), message: 'Hello, its me', likesCount: 1},
        {id: v1(), message: 'Hello, its me', likesCount: 2},
    ],
    inputValue: '',
    profile: {
        aboutMe : 'im fine',
        contacts : {
            "facebook": '',
            "website": null,
            "vk": '',
            "twitter": '',
            "instagram": '',
            "youtube": null,
            "github": '',
            "mainLink": null
        },
        "lookingForAJob" : false,
        "lookingForAJobDescription": 'string',
        "fullName": 'string',
        "userId": 1,
        "photos": {
            "small": 'string',
            "large": 'string'
        }
    }
}
export const profileReducer = (state : ProfilePageType  = initialState, action: ActionTypes) : ProfilePageType => {
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
                ...state, profile : action.profile
            }

        default:
            return state;
    }
};

export const  addPost = (inputValue: string): AddPostActionType => ({
    type: ADD_POST,
    inputValue
})
export const changeInput = (newInput: string) : ChangeInputActionType => ({
    type: CHANGE_INPUT,
    newInput
})
export const setUserProfileActionCreator = (profile: ProfileType) : setUserProfileType => ({
    type: SET_USER_PROFILE,
    profile: profile
})
export const getUserProfile = (userId : string, isAuth : boolean) => {
    return (dispatch : any) => {
        if(isAuth){
            usersAPI.getUserProfile(userId)
                .then(data => {
                    dispatch(setUserProfileActionCreator(data))
                })
        }
        }
}