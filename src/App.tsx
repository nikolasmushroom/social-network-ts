import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";


const App = () => {
    const [posts, setPosts] = useState<Array<PostPropsType>>([
        {message : 'Hello World!', likesCount: 12}
    ]);
    const changePostsHandler = (posts : PostPropsType[]) => {
        setPosts(posts)
    }
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className='main-content'>
                    <Navigation/>
                    <div className='content'>
                        <Routes>
                            <Route path={'/dialogs'} element={<Dialogs/>}/>
                            <Route path={'/profile'} element={<Profile posts={posts} changePostsHandler={changePostsHandler}/>}/>
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
