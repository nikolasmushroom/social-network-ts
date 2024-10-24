import {ActionTypes} from "./store/store";
import {getLogInfo} from "../features/login/model/auth-reducer";
const initialState = {
    initialized: false
}
export const appReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'SET_INITIALIZED' :
            return {...state, initialized: true}
        default :
            return state
    }
}
export const setInitialized = () => {
    return {
        type : 'SET_INITIALIZED',
    } as const
}
export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(getLogInfo());
        Promise.all([promise])
            .then(() => {
            dispatch(setInitialized())
        })
    };
};