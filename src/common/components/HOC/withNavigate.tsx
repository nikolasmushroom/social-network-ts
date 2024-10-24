import React, {ComponentType} from 'react';
import {useNavigate} from "react-router-dom";

export function withNavigate<P extends object>(Component : ComponentType<P>) {
    function ComponentWithNavigate(props : P) {
        let navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    }

    return ComponentWithNavigate;
}