import {useLocation, useNavigate, useParams} from "react-router-dom";
import {ProfileContainerPropsType} from "../Profile/ProfileContainer";
import React from "react";

export const withRouter = (Component : any) => {
    const ComponentWithRouterProp = (props : ProfileContainerPropsType) => {
        let navigate = useNavigate();
        let params = useParams();
        let location = useLocation();
        return <Component {...props} navigate={navigate} params={params} location={location}/>
    }
}