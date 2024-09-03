import React, {ChangeEvent, KeyboardEvent, useRef, useState} from "react";
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";
import {PostType} from "../../Redux/State";
type MyPostsPropsType = {
    posts : PostType[];
}

export const MyPosts : React.FC<MyPostsPropsType> = (props) => {
    const [currentInput, setCurrentInput] = useState('');

    const addNewPost = () => {

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
                {props.posts.map((post) => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
}
