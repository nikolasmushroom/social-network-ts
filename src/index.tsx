import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {v1} from "uuid";
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";

const Index: React.FC = () => {
    const [posts, setPosts] = useState<Array<PostPropsType>>([
        {message: 'Hello World!', likesCount: 12}
    ]);
    let dialogsData = [
        {id: v1(), name: 'Igor'},
        {id: v1(), name: 'Viktor'},
        {id: v1(), name: 'Vlad'},
        {id: v1(), name: 'Dasha'},
    ]
    let messagesData = [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your day?'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Whats wrong with you?'},
    ]
    const changePostsHandler = (posts : PostPropsType[]) => {
        setPosts(posts);
    }
    return (
        <App
            posts={posts}
            changePostsHandler={changePostsHandler}
            dialogsData={dialogsData}
            messagesData={messagesData}
        />
    )
}
ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);