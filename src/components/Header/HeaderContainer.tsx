import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getLogInfo, setUserDataAC} from "../Redux/auth-reducer";
import {RootReduxStateType} from "../Redux/redux-store";
export type HeaderContainerPropsType = {
    isAuth : boolean
    login: string
    setUserDataAC : (userId: number, email : string, login : string) => void
    getLogInfo: () => void
}
class HeaderContainer extends React.Component<HeaderContainerPropsType>{
    componentDidMount() {
        this.props.getLogInfo()
    }

    render(){
        return (
           <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }

}
const mapStateToProps = (state : RootReduxStateType) => {
    return {
        isAuth : state.auth.isAuth,
        login : state.auth.login
    }
}
export default connect(mapStateToProps, {setUserDataAC, getLogInfo})(HeaderContainer);