import React, {KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionTypes, PostType} from "../../Redux/State";

type MyPostsPropsType = {
    posts: PostType[];
    inputValue: string
    dispatch: (action : ActionTypes) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postMessageRef  = React.createRef<HTMLInputElement>()
    // const [currentInput, setCurrentInput] = useState<string>('')


    const addNewPost = () => {
        if (postMessageRef.current) {
            const newPost = postMessageRef.current.value
            if (newPost.trim() !== '') {
                props.dispatch({type : 'ADD-POST', inputValue : props.inputValue})
            }
        }
    };
    // const addNewPost = () => {
    //     {currentInput && currentInput.trim() !== '' &&   props.addNewPost(currentInput.trim())
    //         setCurrentInput('')
    //     }
    // }

    // const onChangeCurrentInput = (e: ChangeEvent<HTMLInputElement>) => {
    //     setCurrentInput(e.currentTarget.value);
    // };

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
                value={props.inputValue}
                // onChange={onChangeCurrentInput}
                onChange={(e) => props.dispatch({type: "CHANGE-INPUT", newInput : e.currentTarget.value})}
                onKeyDown={onKeyDownHandler}
            />
            <button onClick={addNewPost} className={s.button}>Add new post</button>
            <h2>New posts</h2>
            <div className={s.posts}>
                {props.posts.map((post) => <Post key={post.id} id={post.id} message={post.message}
                                                 likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
}
