import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import {News} from "./components/News/News";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";
import './App.css';
import {RootStateType} from "./components/Redux/State";
import {store} from "./components/Redux/State";
import {ActionTypes} from "./components/Redux/State";

export type AppPropsType = {
    store: RootStateType
    dispatch: (action : ActionTypes) => void
}
const App: React.FC<AppPropsType> = (props) => {
    let dialogs = props.store.dialogsPage.dialogs
    let messages = props.store.dialogsPage.messages
    let posts = props.store.profilePage.posts
    let inputValue = props.store.profilePage.inputValue
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className='main-content'>
                    <Navigation/>
                    <div className='content'>
                        <Routes>
                            <Route path={'/dialogs'}
                                   element={<Dialogs dialogs={dialogs}
                                                     messages={messages}
                                                     dispatch={props.dispatch}
                                   />}/>
                            <Route path={'/profile'}
                                   element={<Profile
                                       posts={posts}
                                       dispatch={props.dispatch.bind(store)}
                                       inputValue={inputValue}
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
