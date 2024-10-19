import {UserType} from "../../Redux/store";
import styles from './Users.module.css'
import React from "react";
import {Paginator} from "../common/Paginator";
import {User} from "./User";

export type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    followingInProgress: Array<string>
    changeFollowStatus: (u : UserType, followStatus : boolean) => void
}
export const Users = ({
                          users,
                          currentPage,
                          totalUsersCount,
                          pageSize,
                          setCurrentPage,
                          followingInProgress,
                          changeFollowStatus,
                      }: UsersPropsType) => {
    return (
        <div className={styles.users}>
            <div>
                {users.map(u => <User key={u.id} user={u} followingInProgress={followingInProgress} changeFollowStatus={changeFollowStatus}/>)}
            </div>

           <Paginator pageSize={pageSize} totalUsersCount={totalUsersCount} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}
export default Users