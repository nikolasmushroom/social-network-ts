import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../Redux/store";
import {Button} from "../../common/Button";

type MyPostsPropsType = {
    posts: PostType[];
    inputValue: string
    changeInput: (text : string) => void
    addPost: (inputValue : string) => void
}

export const MyPosts = React.memo(({posts, inputValue, changeInput, addPost}: MyPostsPropsType) => {
    const postMessageRef = React.createRef<HTMLInputElement>()

    const addPostHandler = () => {
        addPost(inputValue)
    };
    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeInput(e.currentTarget.value)
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
            <Button
                onClick={addPostHandler}
                className={s.button}
                disabled={!inputValue.length}
                children='Add new post'
            />
            <h2>New posts</h2>
            <div className={s.posts}>
                {posts.map((post) => <Post key={post.id} id={post.id} message={post.message}
                                           likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
})
