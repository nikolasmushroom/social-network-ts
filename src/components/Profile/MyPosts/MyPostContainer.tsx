import {RootReduxStateType} from "../../Redux/redux-store";
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, changeInputActionCreator} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {ActionTypes} from "../../Redux/store";
const mapStateToProps = (state: RootReduxStateType) => {
    return {
        posts : state.profilePage.posts,
        inputValue : state.profilePage.inputValue,
    }
}
const mapDispatchToProps = (dispatch : (action : ActionTypes) => void) => {
    return {
        onChangeInput : (text : string) => {
            dispatch(changeInputActionCreator(text))
        },
        addNewPost : (inputValue : string) => {
            dispatch(addPostActionCreator(inputValue))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
