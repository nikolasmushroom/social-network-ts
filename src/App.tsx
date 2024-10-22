import React, {lazy, Suspense} from 'react';
import './App.css';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import store, {RootReduxStateType} from "./Redux/redux-store";
import {Preloader} from "./components/common/Preloader";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {AuthContainer} from "./components/Login/LoginContainer";
const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));

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
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <div className='main-content'>
                        <Navigation/>
                        <div className='content'>
                            <Routes>

                                <Route path={'/'} element={<Navigate to={"/profile"}/>}/>

                                <Route path={'/dialogs'}
                                       element={ <Suspense fallback={<Preloader/>}>
                                           <DialogsContainer />
                                       </Suspense>}/>
                                <Route path={"/profile/:userId?"}
                                       element={<Suspense fallback={<Preloader/>}>
                                           <ProfileContainer />
                                       </Suspense>}/>
                                <Route path={'/users'}
                                       element={<UsersContainer
                                       />}/>
                                <Route path={'/news'} element={<News/>}/>
                                <Route path={'/music'} element={<Music/>}/>
                                <Route path={'/settings'} element={<Settings/>}/>
                                <Route path={'/login'} element={<AuthContainer/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
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
        return <Provider store={store}>
            <AppContainer/>
        </Provider>
}
