import {ActionTypes, HeaderStateType, setAuthMeType, setLoadingType, setUserDataACType} from "./store";
import {authAPI} from "../../api/api";

export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_AUTH_ME = 'SET_AUTH_ME'
export const SET_LOADING = 'SET_LOADING'
export const initialState : HeaderStateType = {
    userId : 0,
    email : '',
    login: '',
    isAuth: false,
    isLoading: false
}
export const authReducer = (state = initialState, action : ActionTypes) : HeaderStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {...state, userId : action.data.userId, email : action.data.email, login : action.data.login, isAuth : true}
        case 'SET_AUTH_ME' :
            return {...state, isAuth : true}
        case 'SET_LOADING' :
            return {...state, isLoading: action.isLoading}
        default :
            return state
    }
}
export const setUserDataAC = (userId: number, email : string, login : string) : setUserDataACType => {
    return {
        type : 'SET_USER_DATA',
        data : {userId, email, login}}
}
export const setAuthMe = () : setAuthMeType => {
    return {
        type: 'SET_AUTH_ME',
    }
}
export const setLoading = (isLoading : boolean) : setLoadingType => {
    return {
        type: 'SET_LOADING',
        isLoading: isLoading
    }
}
export const getLogInfo = () => {
    return (dispatch: any) => {
        dispatch(setLoading(true));
        authAPI.showAuthorisationStatus()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthMe())
                    dispatch(setUserDataAC(data.data.id, data.data.email, data.data.login)); // Пользователь авторизован
                }
            })
            .finally(() => {
                dispatch(setLoading(false));
            })
    };
};