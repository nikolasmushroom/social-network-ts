import {v1} from "uuid";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollow, toggleIsFetching,
    usersReducer
} from "../users-reducer";

let startState : any;
beforeEach(() => {
    const UserId1 = v1()
    const UserId2 = v1()
    startState = {
        users: [
            {id: UserId1, name: '1st name', status: 'status', photos: {small: '', large: ''}, followed: false},
            {id: UserId2, name: '1st name', status: 'status', photos: {small: '', large: ''}, followed: true},
        ],
        pageSize: 0,
        totalUsersCount: 0,
        currentPage: 0,
        maxCount: 0,
        isFetching: false,
        followingInProgress: [],
    }
})

test('reducer should toggle follow/unfollow', () => {

    const action = toggleFollow(startState.users[0].id)
    const endState = usersReducer(startState, action)

    expect(endState.users[0].followed).not.toBe(startState.users[0].followed)
})
test('reducer should switch new users array', () => {

    const action = setUsers([])
    const endState = usersReducer(startState, action)

    expect(endState.users.length).toBe(0)
    expect(endState.users).toEqual([])
})
test('reducer should switch new users array', () => {

    const action = setCurrentPage(1)
    const endState = usersReducer(startState, action)

    expect(endState.currentPage).toBe(action.page)
})
test('reducer should switch number of all users count', () => {

    const action = setTotalUsersCount(23)
    const endState = usersReducer(startState, action)

    expect(endState.totalUsersCount).toBe(action.totalUsersCount)
})
test('reducer should switch isFetching status', () => {

    const action = toggleIsFetching(true)
    const endState = usersReducer(startState, action)

    expect(endState.isFetching).not.toBe(startState.isFetching)
    expect(endState.isFetching).toBe(action.isFetching)
})