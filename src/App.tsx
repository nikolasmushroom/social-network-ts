import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import './App.css';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {AuthContainer} from "./components/Login/LoginContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='main-content'>
                    <Navigation/>
                    <div className='content'>
                        <Routes>
                            <Route path={'/'} element={<Navigate to={"/profile"} />} />
                            <Route path={'/dialogs'}
                                   element={<DialogsContainer
                                   />}/>
                            <Route path={"/profile/:userId?"}
                                   element={<ProfileContainer
                                   />} />
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

export default App;
