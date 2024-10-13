import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getLogInfo, logout, setUserDataAC} from "../Redux/auth-reducer";
import {RootReduxStateType} from "../Redux/redux-store";
export type HeaderContainerPropsType = {
    isAuth : boolean
    login: string
    setUserDataAC : (userId: number, email : string, login : string, isAuth : boolean) => void
    getLogInfo: () => void
    logout?: () => void
}
class HeaderContainer extends React.Component<HeaderContainerPropsType>{
    componentDidMount() {
        this.props.getLogInfo()
    }

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
export default connect(mapStateToProps, {setUserDataAC, getLogInfo, logout})(HeaderContainer);