import React, {ComponentType, Suspense} from "react";
import {Preloader} from "../common/Preloader";
export const withSuspense = <P extends object>(Component : ComponentType<P>) => {
    return (props: P) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    };
}