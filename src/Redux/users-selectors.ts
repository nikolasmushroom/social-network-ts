import {RootReduxStateType} from "./redux-store";

export const getUsers = (state : RootReduxStateType) => {
    return state.usersPage.users;
}
export const getPageSize = (state : RootReduxStateType) => {
    return state.usersPage?.pageSize;
}
export const getTotalUsersCount = (state : RootReduxStateType) => {
    return state.usersPage?.totalUsersCount;
}
export const getCurrentPage = (state : RootReduxStateType) => {
    return state.usersPage?.currentPage;
}
export const getIsFetching = (state : RootReduxStateType) => {
    return state.usersPage?.isFetching;
}
export const getFollowingInProgress = (state : RootReduxStateType) => {
    return state.usersPage?.followingInProgress;
}