import styles from './Users.module.css'
import React, {useEffect} from "react";
import {Paginator} from "common/components";
import {User} from "./User/User";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootReduxStateType} from "../../../../app/store/redux-store";
import {requestUsers} from "../../model/users-reducer";
import {Preloader} from "common/components";

export type UsersPropsType = {
}

export const Users = ({}: UsersPropsType) => {
    const users = useSelector((state: RootReduxStateType) => state.usersPage.users)
    const currentPage = useSelector((state: RootReduxStateType) => state.usersPage.currentPage)
    const totalUsersCount = useSelector((state: RootReduxStateType) => state.usersPage.totalUsersCount)
    const pageSize = useSelector((state: RootReduxStateType) => state.usersPage.pageSize)
    const isFetching = useSelector((state: RootReduxStateType) => state.usersPage.isFetching)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize))
    }, [currentPage, pageSize])
    return (
        <>
            {isFetching && <Preloader className={styles.loading}/>}

            {!isFetching &&
                <div className={styles.users}>
                    <div>
                        {users.map(u => <User key={u.id} user={u}/>)}
                    </div>
                    <Paginator pageSize={pageSize} totalItemsCount={totalUsersCount}
                               currentPage={currentPage}/>
                </div>
            }
        </>
    )
}
export default Users