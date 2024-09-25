import {ActionTypes, AddPostActionType, ChangeInputActionType, PostType, ProfilePageType, RootStateType} from "./store";
import {v1} from "uuid";

export const ADD_POST = "ADD-POST";
export const CHANGE_INPUT = "CHANGE-INPUT";
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const initialState = {
    posts: <PostType[]>[
        {id: v1(), message: 'Hello, its me', likesCount: 12},
        {id: v1(), message: 'My favorite color is red', likesCount: 5},
        {id: v1(), message: 'Hello, its me', likesCount: 1},
        {id: v1(), message: 'Hello, its me', likesCount: 2},
    ],
    inputValue: '',
}
export const profileReducer = (state = initialState, action: ActionTypes) => {
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
        default:
            return state;
    }
};

export const addPostActionCreator = (inputValue: string): AddPostActionType => ({
    type: ADD_POST,
    inputValue
})
export const changeInputActionCreator = (newInput: string) : ChangeInputActionType => ({
    type: CHANGE_INPUT,
    newInput
})