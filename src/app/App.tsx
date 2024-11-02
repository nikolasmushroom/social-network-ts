import React from 'react';
import './App.css';
import {Preloader} from "../common/components/Preloader/Preloader";
import {BrowserRouter} from 'react-router-dom';
import {MainPage} from "../common/components/MainPage/MainPage/MainPage";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./app-reducer";
import store, {RootReduxStateType} from "./store/redux-store";


type AppPropsType = {
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component<AppPropsType> {
    catchAllUnhandledErrors(){
        alert('Some error occured')
    }
    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)

    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <MainPage/>
        );
    }
}

const mapStateToProps = (state: RootReduxStateType) => {
    return {
        initialized: state.app.initialized
    }
}
export const AppContainer = compose(
    connect(mapStateToProps, {initializeApp})
)(App);
export const MainApp = () => {
    return (
        <Provider store={store}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <AppContainer/>
            </BrowserRouter>
        </Provider>
    )

}
