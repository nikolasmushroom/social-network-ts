import React from "react";
import {RootReduxStateType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {Login} from "./Login";

export type LoginContainerPropsType = {
    getLogInfo : () => void
    isAuth : boolean
}


export class LoginContainer extends React.Component<LoginContainerPropsType>{
    componentDidMount() {
        if(this.props.getLogInfo){
            this.props.getLogInfo()
        }

    }
    render(){
        return (
            <Login isAuth={this.props.isAuth} getLogInfo={this.props.getLogInfo}/>
        )
    }


}
const mapStateToProps = (state : RootReduxStateType) => {
    return {
        isAuth : state.auth.isAuth,
    }
}
export const AuthContainer= connect(mapStateToProps, {})(LoginContainer);