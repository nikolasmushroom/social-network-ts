import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import {DialogPropsType, Dialogs, MessagePropsType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";

type AppPropsType = {
    dialogsData: DialogPropsType[]
    messagesData: MessagePropsType[]
    posts: PostPropsType[]
    changePostsHandler: (posts: PostPropsType[]) => void
}
const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className='main-content'>
                    <Navigation/>
                    <div className='content'>
                        <Routes>
                            <Route path={'/dialogs'}
                                   element={<Dialogs dialogsData={props.dialogsData}
                                                     messagesData={props.messagesData}/>}/>
                            <Route path={'/profile'}
                                   element={<Profile posts={props.posts}
                                                     changePostsHandler={props.changePostsHandler}/>}/>
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
