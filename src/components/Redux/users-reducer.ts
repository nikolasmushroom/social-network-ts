import {
    ActionTypes,
    setUsersActionType, toFollowSomeoneType,
    UserType
} from "./store";

export const TOGGLE_FOLLOW_SOMEONE = 'FOLLOW_SOMEONE';
export const SET_USERS = 'SET_USERS'

const initialState = {
    users: <UserType[]>[]
}
export const usersReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case TOGGLE_FOLLOW_SOMEONE :
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: !u.followed} : u)}
        case SET_USERS :
            return {...state, users: [...state.users, ...action.users]}
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