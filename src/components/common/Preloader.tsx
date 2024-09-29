import loading from "../../asserts/tube-spinner.svg";
import React from "react";
export type PreloaderPropsType = {
    className? : string
}
export const Preloader = ({className} : PreloaderPropsType) => {
    return (
        <img src={loading} alt="loadingAnimation" className={className}/>
    )
}