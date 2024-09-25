import {
    ActionTypes,
    setCurrentPageType,
    setTotalUsersCountType,
    setUsersActionType,
    toFollowSomeoneType,
    UserType
} from "./store";
import {SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT} from "./profile-reducer";

export const TOGGLE_FOLLOW_SOMEONE = 'FOLLOW_SOMEONE';
export const SET_USERS = 'SET_USERS'

const initialState = {
    users: <UserType[]>[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage : 2,
}
export const usersReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case TOGGLE_FOLLOW_SOMEONE :
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: !u.followed} : u)}
        case SET_USERS :
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.page}
        case SET_TOTAL_USERS_COUNT :
            return {...state, totalUsersCount: action.totalUsersCount}
        default:
            return state;
    }
};

export const toggleFollowActionCreator = (userId: string): toFollowSomeoneType => ({
    type: TOGGLE_FOLLOW_SOMEONE,
    id: userId,
})
export const setUsersActionCreator = (users: UserType[]): setUsersActionType => ({
    type: SET_USERS,
    users: users
})
export const changeCurrentPageActionCreator = (page : number): setCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    page: page
})
export const setTotalUsersCountActionCreator = (totalUsersCount : number) : setTotalUsersCountType => ({
    type : SET_TOTAL_USERS_COUNT,
    totalUsersCount : totalUsersCount
})