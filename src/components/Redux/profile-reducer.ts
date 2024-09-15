import {ActionTypes, PostType, ProfilePageType} from "./store";
import {v1} from "uuid";

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD-POST' : {
            const newPost: PostType = {
                id: v1(),
                message: action.inputValue,
                likesCount: 0,
            }
            state.posts.push(newPost)
            state.inputValue = '';
            return state
        }
        case 'CHANGE-INPUT' : {
            state.inputValue = action.newInput
            return state
        }
    }
    return state;
}