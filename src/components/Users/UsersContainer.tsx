import Users from "./Users";
import {connect} from "react-redux";
import {RootReduxStateType} from "../Redux/redux-store";
import {ActionTypes, UserType} from "../Redux/store";
import {setUsersActionCreator, toggleFollowActionCreator} from "../Redux/users-reducer";

const mapStateToProps = (state: RootReduxStateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        toggleFollow: (userId: string) => dispatch(toggleFollowActionCreator(userId)),
        setUsers: (users: UserType[]) => dispatch(setUsersActionCreator(users))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);