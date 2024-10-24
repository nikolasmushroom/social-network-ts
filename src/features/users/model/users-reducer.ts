import {
    ActionTypes,
    setCurrentPageType,
    setTotalUsersCountType,
    setUsersActionType,
    toFollowSomeoneType, toggleIsFetchingType, toggleIsFollowingProgressType, UsersStateType,
    UserType
} from "../../../app/store/store";
import {usersAPI} from "../../../api/api";

export const TOGGLE_FOLLOW_SOMEONE = 'FOLLOW_SOMEONE';
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export const SET_MAX_COUNT = 'SET_MAX_COUNT';

const initialState: UsersStateType = {
    users: <UserType[]>[],
    isFetching: false,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    followingInProgress: []
}
export const usersReducer = (state = initialState, action: ActionTypes): UsersStateType => {
    switch (action.type) {
        case TOGGLE_FOLLOW_SOMEONE :
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: !u.followed} : u)}
        case SET_USERS :
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.page}
        case SET_TOTAL_USERS_COUNT :
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING :
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS :
            return {
                ...state, followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};

export const toggleFollow = (userId: string): toFollowSomeoneType => ({
    type: TOGGLE_FOLLOW_SOMEONE,
    id: userId,
})
export const setUsers = (users: UserType[]): setUsersActionType => ({
    type: SET_USERS,
    users: users
})
export const setCurrentPage = (page: number): setCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    page: page
})
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
})
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})
export const toggleIsFollowingProgress = (isFollowing: boolean, userId: string): toggleIsFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFollowing: isFollowing,
    userId: userId
})
export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    try {
        const response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(response.data.items))
        dispatch(setTotalUsersCount(response.data.totalCount))
    } finally {
        dispatch(toggleIsFetching(false))
    }
}
export const changeFollowStatus = (u: UserType, followStatus: boolean) => async (dispatch: any) => {
    const response = await usersAPI.changeFollowStatus(u.id, followStatus)
    response.data.resultCode === 0 && dispatch(toggleFollow(u.id))
    dispatch(toggleIsFollowingProgress(false, u.id))
}