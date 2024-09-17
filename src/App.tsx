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
import {ActionTypes} from "./components/Redux/store";
import {RootReduxStoreType} from "./components/Redux/redux-store";

export type AppPropsType = {
    store: RootReduxStoreType
    dispatch: (action: ActionTypes) => void
}
const App = ({store, dispatch} : AppPropsType) => {
    const state = store.getState()
    let dialogs = state.dialogsPage.dialogs
    let messages = state.dialogsPage.messages

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
                                                     dispatch={dispatch}
                                   />}/>
                            <Route path={'/profile'}
                                   element={<Profile
                                       store={store}
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
