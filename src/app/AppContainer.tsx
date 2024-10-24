import store, {RootReduxStateType} from "./store/redux-store";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./app-reducer";
import React from "react";
import App from "./App";
export const mapStateToProps = (state: RootReduxStateType) => {
    return {
        initialized: state.app.initialized
    }
}
export const AppContainer = compose(
    connect(mapStateToProps, {initializeApp})
)(App);
export const MainApp = () => {
    return <Provider store={store}>
        <AppContainer/>
    </Provider>
}