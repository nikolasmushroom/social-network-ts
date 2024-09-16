import React, {ChangeEvent, KeyboardEvent} from "react";
import store from "../../Redux/redux-store";
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, changeInputActionCreator} from "../../Redux/profile-reducer";

type MyPostsContainerPropsType = {
    store: any
}

export const MyPostsContainer = ({store}: MyPostsContainerPropsType) => {
    const postMessageRef = React.createRef<HTMLInputElement>()
    const state = store.getState()
    const addNewPost = () => {
        if (postMessageRef.current) {
            const newPost = postMessageRef.current.value
            if (newPost.trim() !== '') {
                store.dispatch(addPostActionCreator(state.profilePage.inputValue))
            }
        }
    };
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        let newInputValue  = e.currentTarget.value
        store.dispatch(changeInputActionCreator(newInputValue))
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addNewPost();
        }
    };

    return (
        <MyPosts posts={state.profilePage.posts} inputValue={state.profilePage.inputValue}
                 changeInputHandler={onChangeInput} addPostHandler={addNewPost}/>
    );
}
