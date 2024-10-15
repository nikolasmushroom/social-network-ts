import React from 'react';
import {useNavigate} from "react-router-dom";

export function withNavigate(Component : any) {
    function ComponentWithNavigate(props : any) {
        let navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    }

    return ComponentWithNavigate;
}