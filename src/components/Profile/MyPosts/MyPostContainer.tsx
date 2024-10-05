import {RootReduxStateType} from "../../Redux/redux-store";
import {MyPosts} from "./MyPosts";
import {addPost, changeInput} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
const mapStateToProps = (state: RootReduxStateType) => {
    return {
        posts : state.profilePage.posts,
        inputValue : state.profilePage.inputValue,
    }
}
export const MyPostsContainer = connect(mapStateToProps, {changeInput, addPost})(MyPosts);
