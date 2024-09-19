import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../Redux/store";

type MyPostsPropsType = {
    posts: PostType[];
    inputValue: string
    onChangeInput: (text : string) => void
    addNewPost: (inputValue : string) => void
}

export const MyPosts = ({posts, inputValue, onChangeInput, addNewPost}: MyPostsPropsType) => {
    const postMessageRef = React.createRef<HTMLInputElement>()

    const addPostHandler = () => {
        addNewPost(inputValue)
    };
    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeInput(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addPostHandler();
        }
    };

    return (
        <div className={s.post + ' ' + s.postBlock}>
            <h2>My posts</h2>
            <input
                className={s.input}
                ref={postMessageRef}
                value={inputValue}
                onChange={changeInputHandler}
                onKeyDown={onKeyDownHandler}
            />
            <button onClick={addPostHandler} className={s.button}>Add new post</button>
            <h2>New posts</h2>
            <div className={s.posts}>
                {posts.map((post) => <Post key={post.id} id={post.id} message={post.message}
                                           likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
}
