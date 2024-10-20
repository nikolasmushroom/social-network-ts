import {v1} from "uuid";
import {DialogsPageType} from "./store";
import {dialogsReducer, sendMessage, updateNewMessage} from "./dialogs-reducer";

test('reducer should right update text in input', () => {

    const startState : DialogsPageType = {
        dialogs : [],
        messages :[],
        newMessageText : '',
    }
    const action = updateNewMessage('New message')
    const endState = dialogsReducer(startState, action)

    expect(startState.newMessageText).not.toBe(endState.newMessageText)
    expect(endState.newMessageText).toBe(action.newMessage)
})
test('reducer should send right text', () => {
    const dialogId1 = v1();
    const dialogId2 = v1();

    const startState : DialogsPageType = {
        dialogs : [
            { id: dialogId1, image: '', name: '1st name'},
            { id: dialogId2, image: '', name: '2nd name'},
        ],
        messages :[
            { id: dialogId1, message: 'Hello'},
            { id: dialogId2, message: 'Goodbye'},
        ],
        newMessageText : 'New message text',
    }
    const action = sendMessage()
    const endState = dialogsReducer(startState, action)

    expect(endState.newMessageText).toBe('')
    expect(endState.messages[2].message).toBe(startState.newMessageText)
})