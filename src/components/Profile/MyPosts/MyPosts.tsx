import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './MyPosts.module.css';
import { Post, PostPropsType } from "./Post/Post";
type MyPostsPropsType = {
    posts : PostPropsType[];
    changePostsHandler : (posts : PostPropsType[]) => void;
}

export const MyPosts = ({posts, changePostsHandler} : MyPostsPropsType) => {
    const [currentInput, setCurrentInput] = useState('');

    const addNewPost = () => {
        changePostsHandler([...posts, { message: currentInput, likesCount : 0 }]);
        setCurrentInput('');
    };

    const onChangeCurrentInput = (e : ChangeEvent<HTMLInputElement>) => {
        setCurrentInput(e.currentTarget.value);
    };

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addNewPost();
        }
    };

    return (
        <div className={s.post + ' ' + s.postBlock}>
            <h2>My posts</h2>
            <input
                className={s.input}
                value={currentInput}
                onChange={onChangeCurrentInput}
                onKeyDown={onKeyDownHandler}
            />
            <button onClick={addNewPost} className={s.button}>Add new post</button>
            <h2>New posts</h2>
            <div className={s.posts}>
                {posts.map((post, index) => <Post key={index} message={post.message} likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
}
