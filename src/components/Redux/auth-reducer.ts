import {HeaderStateType, setUserDataACType} from "./store";
import {usersAPI} from "../../api/api";

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
export const getLogInfo = () => {
    return (dispatch : any) => {
        usersAPI.showAuthorisationStatus()
            .then(data => {
                if(data.resultCode === 0){
                    dispatch(setUserDataAC(data.data.id, data.data.email, data.data.login))
                }
            })
    }
}