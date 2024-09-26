import {
    ActionTypes,
    setCurrentPageType, setMaxCountType,
    setTotalUsersCountType,
    setUsersActionType,
    toFollowSomeoneType,
    UserType
} from "./store";

export const TOGGLE_FOLLOW_SOMEONE = 'FOLLOW_SOMEONE';
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

export const SET_MAX_COUNT = 'SET_MAX_COUNT';

const initialState = {
    users: <UserType[]>[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage : 1,
    maxCount : 10,
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
        case SET_MAX_COUNT :
            return {...state, maxCount: action.newCount}
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
export const setMaxCountActionCreator = (newCount : number) : setMaxCountType => ({
    type : SET_MAX_COUNT,
    newCount : newCount
})