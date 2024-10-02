import {HeaderStateType, setUserDataACType} from "./store";

export const SET_USER_DATA = 'SET_USER_DATA'
export const initialState : HeaderStateType = {
    userId : 0,
    email : '',
    login: '',
    isAuth: false,
}
export const authReducer = (state = initialState, action : setUserDataACType) : HeaderStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {...state, userId : action.data.userId, email : action.data.email, login : action.data.login, isAuth : true}
        default :
            return state
    }
}
export const setUserDataAC = (userId: number, email : string, login : string) : setUserDataACType => {
    return {
        type : 'SET_USER_DATA',
        data : {userId, email, login}}
}