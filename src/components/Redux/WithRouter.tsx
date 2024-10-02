import {Location, NavigateFunction, useLocation, useNavigate, useParams} from "react-router-dom";
import React, {ComponentType} from "react";

export type withRouterPropsType = {
    navigate: NavigateFunction;
    params: {[key: string]: string};
    location: Location
}

export const withRouter = <P extends object>(Component : ComponentType<P>) => {
    return (props: P) => {
        let navigate = useNavigate();
        let params = useParams();
        let location = useLocation();
        return <Component {...props} params={params} navigate={navigate} location={location}/>
    };
}