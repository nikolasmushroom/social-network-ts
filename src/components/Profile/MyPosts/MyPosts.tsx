import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionTypes, PostType} from "../../Redux/store";

type MyPostsPropsType = {
    posts: PostType[];
    inputValue: string
    changeInputHandler: (e: ChangeEvent<HTMLInputElement>) => void
    addPostHandler: () => void
}

export const MyPosts = ({posts, inputValue, changeInputHandler, addPostHandler}: MyPostsPropsType) => {
    const postMessageRef = React.createRef<HTMLInputElement>()

    const addNewPost = () => {
        if (postMessageRef.current) {
            const newPost = postMessageRef.current.value
            if (newPost.trim() !== '') {
                // dispatch({type: "ADD-POST", newInput : newPost})
                addPostHandler()
            }
        }
    };
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        // dispatch({type: "CHANGE-INPUT", newInput : e.currentTarget.value})
        changeInputHandler(e)
    }

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
                ref={postMessageRef}
                value={inputValue}
                // onChange={onChangeCurrentInput}
                onChange={onChangeInput}
                onKeyDown={onKeyDownHandler}
            />
            <button onClick={addNewPost} className={s.button}>Add new post</button>
            <h2>New posts</h2>
            <div className={s.posts}>
                {posts.map((post) => <Post key={post.id} id={post.id} message={post.message}
                                           likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
}
