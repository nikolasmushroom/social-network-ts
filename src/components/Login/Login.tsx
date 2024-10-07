import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {RootReduxStateType} from "../Redux/redux-store";
export type LoginContainerPropsType = {
    getLogInfo : () => void
    isAuth : boolean
}
export const Login = (isAuth : any) => {
    if(isAuth){
        return <Navigate to={'/'}/>
    }
    return (
        <div>LOGIN</div>
    )

}
class LoginContainer extends React.Component<any>{
    componentDidMount() {
        this.props.getLogInfo()
    }

    render(){
        return (
            <Login isAuth={this.props.isAuth}/>
        )
    }
}
const mapStateToProps = (state : RootReduxStateType) => {
    return {
        isAuth : state.auth.isAuth,
    }
}
export default connect(mapStateToProps, {})(Login);