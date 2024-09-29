import {ProfilePageType} from "./store";
import {v1} from "uuid";
import {addPostActionCreator, changeInputActionCreator, profileReducer} from "./profile-reducer";

test('reducer should add right post at the end', () => {
    const postId1 = v1()
    const postId2 = v1()

    const startState: ProfilePageType = {
        posts: [
            {id: postId1, message: '1st message', likesCount: 0},
            {id: postId2, message: '2nd message', likesCount: 0},
        ],
        inputValue: 'New message'
    }

    const action = addPostActionCreator(startState.inputValue)
    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(3)
    expect(endState.posts[2].message).toBe(action.inputValue)
})
test('reducer should right update text in input', () => {
    const postId1 = v1()
    const postId2 = v1()

    const startState: ProfilePageType = {
        posts: [
            {id: postId1, message: '1st message', likesCount: 0},
            {id: postId2, message: '2nd message', likesCount: 0},
        ],
        inputValue: ' '
    }

    const action = changeInputActionCreator('New input value')
    const endState = profileReducer(startState, action)

    expect(endState.inputValue).toBe(action.newInput)
})