import {RootReduxStateType} from "../../../../../app/store/redux-store";
import {addPost, changeInput} from "../../../model/profile-reducer";
import {connect} from "react-redux";
import React from "react";
import {MyPosts} from "./MyPosts";
const mapStateToProps = (state: RootReduxStateType) => {
    return {
        posts : state.profilePage.posts,
        inputValue : state.profilePage.inputValue,
    }
}
export const MyPostsContainer = React.memo(connect(mapStateToProps, {changeInput, addPost})(MyPosts));
