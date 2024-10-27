import {ActionTypes, HeaderStateType, setAuthMeType, setLoadingType, setUserDataACType} from "../../../app/store/store";

import {authAPI} from "../api/authAPI";

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
export const setError = (error: string) => {
    return {
        type: 'SET_ERROR',
        error: error
    } as const
}
export const getLogInfo = () => {
    return async (dispatch: any) => {
        const response = await authAPI.authMe()
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthMe())
                    dispatch(setUserDataAC(id, email, login, true))
                }
    };
};
export const login = (email: string, password: string, rememberMe: boolean = false) => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getLogInfo())
    } else {
        dispatch(setError(response.data.messages))
    }
}
export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserDataAC(0, '', '', false))
    }
}