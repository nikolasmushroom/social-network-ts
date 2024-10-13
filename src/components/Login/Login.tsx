import {Navigate} from "react-router-dom";
import React, {useEffect} from "react";
import classes from "./Login.module.css";
import {LoginForm} from "./LoginForm";

export type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
    error: string
}
export const Login = ({isAuth, login, error}: LoginPropsType) => {
    useEffect(() => {
    }, [isAuth])
    if (isAuth) {
        return <Navigate to={'/profile'}/>
    } else {
        return (
            <div className={classes.login}>
                <h1>LOGIN</h1>
                <LoginForm login={login} error={error}/>
            </div>
        )
    }
}
