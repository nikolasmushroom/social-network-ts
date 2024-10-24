import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../../features/login/model/auth-reducer";
import {RootReduxStateType} from "../../../app/store/redux-store";
export type HeaderContainerPropsType = {
    isAuth : boolean
    login: string
    logout?: () => void
}
class HeaderContainer extends React.Component<HeaderContainerPropsType>{
    render(){
        return (
           <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
        )
    }

}
const mapStateToProps = (state : RootReduxStateType) => {
    return {
        isAuth : state.auth.isAuth,
        login : state.auth.login
    }
}
export default connect(mapStateToProps, {logout})(HeaderContainer);