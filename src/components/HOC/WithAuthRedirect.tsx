import React, {ComponentType} from "react";
import {Preloader} from "../common/Preloader";
import {Navigate} from "react-router-dom";
import {RootReduxStateType} from "../Redux/redux-store";
import {connect} from "react-redux";
// type withAuthRedirectProps = {
//     isAuth: boolean;
//     isLoading: boolean;
// }

export const withAuthRedirect = <P extends object>(Component : ComponentType<P>) => {
    const RedirectComponent  = (props : any)   => {
        if(props.isLoading){
            return <Preloader/>
        }
        if (!props.isAuth){
            return <Navigate to={'/login'}/>
        }
        return <Component {...props}/>
    };
    const mapStateToRedirectProps = (state: RootReduxStateType) => ({
        isAuth: state.auth.isAuth,
        isLoading: state.auth.isLoading
    })
    return connect(mapStateToRedirectProps)(RedirectComponent)
}