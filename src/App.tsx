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
import {RootStateType} from "./components/Redux/store";
import {ActionTypes} from "./components/Redux/store";
import {addPostActionCreator, changeInputActionCreator} from "./components/Redux/profile-reducer";

export type AppPropsType = {
    store: RootStateType
    dispatch: (action: ActionTypes) => void
}
const App: React.FC<AppPropsType> = ({store, dispatch}) => {
    let dialogs = store.dialogsPage.dialogs
    let messages = store.dialogsPage.messages
    let posts = store.profilePage.posts
    let inputValue = store.profilePage.inputValue

    const changeInputHandler = (newInput: string) => {
        dispatch(changeInputActionCreator(newInput))
    }
    const addPostHandler = () => {
        dispatch(addPostActionCreator(inputValue))
    }
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
