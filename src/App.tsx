import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import './App.css';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='main-content'>
                    <Navigation/>
                    <div className='content'>
                        <Routes>
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
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
