import {ActionTypes, HeaderStateType, setAuthMeType, setLoadingType, setUserDataACType} from "./store";
import {authAPI} from "../../api/api";

export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_AUTH_ME = 'SET_AUTH_ME'
export const SET_LOADING = 'SET_LOADING'
export const initialState: HeaderStateType = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false,
    isLoading: false,
    error: ''
}
export const authReducer = (state = initialState, action: ActionTypes): HeaderStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                userId: action.data.userId,
                email: action.data.email,
                login: action.data.login,
                isAuth: action.data.isAuth,
            }
        case 'SET_AUTH_ME' :
            return {...state, isAuth: true}
        case 'SET_LOADING' :
            return {...state, isLoading: action.isLoading}
        case 'SET_ERROR' :
            return {...state, error: action.error}
        default :
            return state
    }
}
export const setUserDataAC = (userId: number, email: string, login: string, isAuth: boolean): setUserDataACType => {
    return {
        type: 'SET_USER_DATA',
        data: {userId, email, login, isAuth}
    }
}
export const setAuthMe = (): setAuthMeType => {
    return {
        type: 'SET_AUTH_ME',
    }
}
export const setLoading = (isLoading: boolean): setLoadingType => {
    return {
        type: 'SET_LOADING',
        isLoading: isLoading
    }
}
export const setError = (error : string) => {
    return {
        type : 'SET_ERROR',
        error : error
    } as const
}
export const getLogInfo = () => {
    return (dispatch: any) => {
        dispatch(setLoading(true));
        authAPI.showAuthorisationStatus()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthMe())
                    dispatch(setUserDataAC(data.data.id, data.data.email, data.data.login, true))
                }
            })
            .finally(() => {
                dispatch(setLoading(false));
            })
    };
};
export const login = (email: string, password: string, rememberMe: boolean = false) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getLogInfo())
                }else{
                    dispatch(setError(data.messages))
                }
            })
    }
}
export const logout = () => {
    return (dispatch: any) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserDataAC(0, '', '', false))
                }
            })
    }
}