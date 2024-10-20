import React from "react";
import {RootReduxStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Login} from "./Login";
import {getLogInfo, login} from "../../Redux/auth-reducer";

export type LoginContainerPropsType = {
    getLogInfo : () => void
    login:(email: string, password: string, rememberMe: boolean) => void
    isAuth : boolean
    error : string
}


export class LoginContainer extends React.Component<LoginContainerPropsType>{
    componentDidMount() {
        if(this.props.getLogInfo){
            this.props.getLogInfo()
        }

    }
    render(){
        return (
            <Login isAuth={this.props.isAuth} login={this.props.login} error={this.props.error}/>
        )
    }


}
const mapStateToProps = (state : RootReduxStateType) => {
    return {
        isAuth : state.auth.isAuth,
        error : state.auth.error
    }
}
export const AuthContainer= connect(mapStateToProps, {login, getLogInfo})(LoginContainer);