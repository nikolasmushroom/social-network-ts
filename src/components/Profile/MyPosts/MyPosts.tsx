import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from '../MyPosts/MyPosts.module.css'
import {Post, PostPropsType} from "./Post/Post";
import classes from "./MyPosts.module.css";

export const MyPosts = () => {
    const [currentPosts, setCurrentPosts] = useState<Array<PostPropsType>>([])
    const [currentInput, setCurrentInput] = useState('')
    const addNewPost = () => {setCurrentPosts([...currentPosts, { message: currentInput }]); setCurrentInput('')};
    const onChangeCurrentInput = (e : ChangeEvent<HTMLInputElement>) => (setCurrentInput(e.currentTarget.value));
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            setCurrentPosts([...currentPosts, { message: currentInput }])
            setCurrentInput('');
        }
    }
    return (
        <div className={classes.post}>
            <h2>
                My posts
            </h2>
            <input className={classes.input} value={currentInput}
                   onChange={onChangeCurrentInput}
                   onKeyDown={onKeyDownHandler}
            />
            <button onClick={addNewPost} className={classes.button}>Add new post</button>
            <h2>
                New posts
            </h2>
            <div className={s.posts}>
                {currentPosts.map((post) => <Post message={post.message}/>)}
            </div>
        </div>
    )
}