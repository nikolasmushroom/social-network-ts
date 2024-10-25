import React from 'react';
import './App.css';
import {Preloader} from "../common/components/Preloader/Preloader";
import {BrowserRouter} from 'react-router-dom';
import {MainPage} from "../common/components/MainPage/MainPage/MainPage";


type AppPropsType = {
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <MainPage/>
            </BrowserRouter>
        );
    }
}

export default App
