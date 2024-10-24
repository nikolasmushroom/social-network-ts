import {useLocation, useNavigate, useParams} from "react-router-dom";
import React, {ComponentType} from "react";


export const withRouter = <P extends object>(Component : ComponentType<P>) => {
    return (props: P) => {
        let navigate = useNavigate();
        let params = useParams();
        let location = useLocation();

        return <Component {...props} params={params} navigate={navigate} location={location}/>
    };
}