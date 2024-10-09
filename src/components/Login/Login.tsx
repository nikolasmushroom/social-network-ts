import {Navigate} from "react-router-dom";
import React from "react";
export type LoginContainerPropsType = {
    getLogInfo? : () => void
    isAuth? : boolean
}
export const Login = ({isAuth} : LoginContainerPropsType) => {

    if(isAuth){
        return <Navigate to={'/'}/>
    }

    return (
        <div>LOGIN</div>
    )

}