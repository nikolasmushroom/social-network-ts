import {
    ActionTypes,
    getCaptchaUrlType,
    HeaderStateType,
    setAuthMeType,
    setLoadingType,
    setUserDataACType
} from "../../../app/store/store";

import {authAPI} from "../api/authAPI";
import {securityAPI} from "../api/securityAPI";
import {AppDispatch} from "../../../app/store/redux-store";

export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_AUTH_ME = 'SET_AUTH_ME'
export const SET_LOADING = 'SET_LOADING'
export const initialState: HeaderStateType = {
    userId: '',
    email: '',
    login: '',
    isAuth: false,
    isLoading: false,
    captchaUrl: '',
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
        case 'GET_CAPTCHA_URL_SUCCESS':
            return {...state, captchaUrl: action.payload.captchaUrl}
        default :
            return state
    }
}
export const setUserDataAC = (userId: string, email: string, login: string, isAuth: boolean): setUserDataACType => {
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
export const getCaptcha = (captchaUrl: string): getCaptchaUrlType => {
    return {
        type: 'GET_CAPTCHA_URL_SUCCESS',
        payload: {
            captchaUrl: captchaUrl
        }
    } as const
}
export const setError = (error: string) => {
    return {
        type: 'SET_ERROR',
        error: error
    } as const
}
export const getLogInfo = () => {
    return async (dispatch: AppDispatch) => {
        const response = await authAPI.authMe()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthMe())
            dispatch(setUserDataAC(id, email, login, true))
        }
    };
};
export const login = (email: string, password: string, rememberMe: boolean = false, captcha: string) => async (dispatch: AppDispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getLogInfo())
    } else if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl())
    } else {
        dispatch(setError(response.data.messages))
    }
}
export const getCaptchaUrl = () => async (dispatch: AppDispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getCaptcha(captchaUrl))
}
export const logout = () => async (dispatch: AppDispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserDataAC('0', '', '', false))
    }
}