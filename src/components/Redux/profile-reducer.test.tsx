import {ProfilePageType} from "./store";
import {v1} from "uuid";
import {addPost, changeInput, profileReducer, setStatusActionCreator} from "./profile-reducer";

let startState : ProfilePageType;
beforeEach(() => {
    const postId1 = v1()
    const postId2 = v1()

   startState = {
        posts: [
            {id: postId1, message: '1st message', likesCount: 0},
            {id: postId2, message: '2nd message', likesCount: 0},
        ],
        inputValue: 'New Message',
       status : ''
    }
})

test('reducer should add right post at the end', () => {

    const action = addPost(startState.inputValue)
    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(3)
    expect(endState.posts[2].message).toBe(action.inputValue)
})
test('reducer should right update text in input', () => {

    const action = changeInput('New input value')
    const endState = profileReducer(startState, action)

    expect(endState.inputValue).toBe(action.newInput)
})
test('reducer should right update profile status', () => {

    const action = setStatusActionCreator('New profile status')
    const endState = profileReducer(startState, action)

    expect(endState.status).toBe(action.newStatus)
})