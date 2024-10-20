import React, {ComponentProps, ComponentType} from "react";
import {Preloader} from "../common/Preloader";
import {Navigate} from "react-router-dom";
import {RootReduxStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
type withAuthRedirectProps = {
    isAuth: boolean;
    isLoading: boolean;
}
export const withAuthRedirect = <P extends ComponentProps<ComponentType>>(Component : ComponentType<P>) => {
    const RedirectComponent : any  = (props: P & withAuthRedirectProps)   => {
        if(props.isLoading){
            return <Preloader/>
        }
        if (!props.isAuth){
            return <Navigate to={'/login'}/>
        }
        return <Component {...props}/>
    };
    const mapStateToRedirectProps = (state: RootReduxStateType): withAuthRedirectProps  => ({
        isAuth: state.auth.isAuth,
        isLoading: state.auth.isLoading
    })
    return connect(mapStateToRedirectProps)(RedirectComponent)
}