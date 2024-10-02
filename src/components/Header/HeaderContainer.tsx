import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserDataAC} from "../Redux/auth-reducer";
import {RootReduxStateType} from "../Redux/redux-store";
export type HeaderContainerPropsType = {
    isAuth : boolean
    login: string
    setUserDataAC : (userId: number, email : string, login : string) => void
}
class HeaderContainer extends React.Component<HeaderContainerPropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials : true})
            .then(response => {
                if(response.data.resultCode === 0){
                    this.props.setUserDataAC(response.data.data.id, response.data.data.email, response.data.data.login)
                }
            })
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
export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer);