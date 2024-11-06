import React, {useEffect} from 'react';
import './App.css';
import {Preloader} from "../common/components/Preloader/Preloader";
import {MainPage} from "../common/components/MainPage/MainPage/MainPage";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./app-reducer";
import {AppDispatch, RootReduxStateType} from "./store/redux-store";

const App = () => {
    const initialized = useSelector((state: RootReduxStateType) => state.app.initialized)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(initializeApp())
        const handleUnhandledRejection = () => {
            alert('Some error occurred');
        };
        window.addEventListener('unhandledrejection', handleUnhandledRejection)
        return () => {
            window.removeEventListener('unhandledrejection', handleUnhandledRejection)
        }
    }, [initialized])
    return (
        <>
            {initialized ?
                <MainPage/> :
                <Preloader/>
            }
        </>
    )
}
export default App