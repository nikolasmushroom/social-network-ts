import {RootReduxStateType} from "../../../Redux/redux-store";
import {MyPosts} from "./MyPosts";
import {addPost, changeInput} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";
const mapStateToProps = (state: RootReduxStateType) => {
    return {
        posts : state.profilePage.posts,
        inputValue : state.profilePage.inputValue,
    }
}
export const MyPostsContainer = React.memo(connect(mapStateToProps, {changeInput, addPost})(MyPosts));
