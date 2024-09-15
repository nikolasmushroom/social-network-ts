import {ActionTypes, PostType, ProfilePageType} from "./store";
import {v1} from "uuid";
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