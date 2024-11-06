import {Navigate} from "react-router-dom";
import React, {useEffect} from "react";
import classes from "./Login.module.css";
import {LoginForm} from "./loginForm/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootReduxStateType} from "../../../../app/store/redux-store";
import {getLogInfo} from "../../model/auth-reducer";

export type LoginPropsType = {}
export const Login = ({}: LoginPropsType) => {
    const isAuth = useSelector((state : RootReduxStateType) => state.auth.isAuth)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        if(getLogInfo){
            dispatch(getLogInfo())
        }
    }, [isAuth])
    if (isAuth) {
        return <Navigate to={'/profile'}/>
    } else {
        return (
            <div className={classes.login}>
                <h1>LOGIN</h1>
                <LoginForm/>
            </div>
        )
    }
}
