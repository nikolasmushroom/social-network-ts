// import Users from "./Users";
import Users from "./UsersClassComponent";
import {connect} from "react-redux";
import {RootReduxStateType} from "../Redux/redux-store";
import {ActionTypes, UserType} from "../Redux/store";
import {
    changeCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    toggleFollowActionCreator
} from "../Redux/users-reducer";

const mapStateToProps = (state: RootReduxStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage?.pageSize,
        totalUsersCount: state.usersPage?.totalUsersCount,
        currentPage : state.usersPage?.currentPage,
    }
}
const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        toggleFollow: (userId: string) => dispatch(toggleFollowActionCreator(userId)),
        setUsers: (users: UserType[]) => dispatch(setUsersActionCreator(users)),
        setCurrentPage: (page : number) => dispatch(changeCurrentPageActionCreator(page)),
        setTotalUsersCount : (totalUsersCount: number) => dispatch(setTotalUsersCountActionCreator(totalUsersCount))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);