import React, {useState} from "react";
import {PostPropsType} from "../Profile/MyPosts/Post/Post";
import {v1} from "uuid";
import App from "../../App";

export const State: React.FC = () => {
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
    const changePostsHandler = (posts: PostPropsType[]) => {
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