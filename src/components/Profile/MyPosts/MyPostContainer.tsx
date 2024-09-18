import React, {ChangeEvent, KeyboardEvent} from "react";
import {RootReduxStoreType} from "../../Redux/redux-store";
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, changeInputActionCreator} from "../../Redux/profile-reducer";

type MyPostsContainerPropsType = {
    store: RootReduxStoreType
}

export const MyPostsContainer = ({store} : MyPostsContainerPropsType) => {
    const  state = store.getState()
    const addNewPost = () => {
        store.dispatch(addPostActionCreator(state.profilePage.inputValue))

    };
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addNewPost();
        }
    };
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        let newInputValue = e.currentTarget.value
        store.dispatch(changeInputActionCreator(newInputValue))
    }
    return (
        <MyPosts posts={state.profilePage.posts} inputValue={state.profilePage.inputValue}
                 changeInputHandler={onChangeInput}
                 addPostHandler={addNewPost}/>
    )
}
