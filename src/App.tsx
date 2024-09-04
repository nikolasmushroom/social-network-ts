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

export type AppPropsType = {
    state: RootStateType
    addPost: () => void
    changeInput: (newInput : string) => void
}
const App: React.FC<AppPropsType> = (props) => {
    let dialogs = props.state.dialogsPage.dialogs
    let messages = props.state.dialogsPage.messages
    let posts = props.state.profilePage.posts
    let inputValue = props.state.profilePage.inputValue
    let changeInputHandler = (newInput : string) => {
        props.changeInput(newInput)
    }

    let addNewPostHandler = () => {
        props.addPost()
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
                                   />}/>
                            <Route path={'/profile'}
                                   element={<Profile
                                       posts={posts}
                                       addNewPost={addNewPostHandler}
                                       inputValue={inputValue}
                                       changeInput={changeInputHandler}
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
