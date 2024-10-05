import {UserType} from "../Redux/store";
import styles from './Users.module.css'
import avatar from "../../asserts/avatars/defaultUserImage.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    maxCount: number
    toggleFollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setMaxCount: (newCount: number) => void
    getUsersFromAPI: (page: number) => void
}
export const Users = ({
                          users,
                          toggleFollow,
                          currentPage,
                          totalUsersCount,
                          pageSize,
                          setMaxCount,
                          maxCount,
                          getUsersFromAPI
                      }: UsersPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages: Array<number> = []
    const onPageChange = (changeDirection: '<' | '>') => <span className={styles.pageChangers} onClick={() => {
                {
                    setMaxCount(changeDirection === '>' ? maxCount + 10 : maxCount - 10)
                }
            }}>{changeDirection}</span>
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const changeFollowStatus = (u: UserType, followStatus : boolean) => {
        usersAPI.changeFollowStatus(u.id, followStatus)
            .then(data => {
                data.resultCode === 0 && toggleFollow(u.id)
            })
    }
    return (
        <div className={styles.users}>
            {users.map(u => <div className={styles.user} key={u.id}>
                <div className={styles.imageAndButton}>
                    <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small ? u.photos.small : avatar} alt="avatar"/>
                    </NavLink>
                    {!u.followed
                        ? <button
                            onClick={() => {
                                changeFollowStatus(u, u.followed)
                            }
                            }>{'Follow'}</button>
                        : <button
                            onClick={() => {
                                changeFollowStatus(u, u.followed)

                            }
                            }>{'Unfollow'}</button>
                    }

                </div>
                <div className={styles.userProfile}>
                    <div className={styles.nameAndStatus}>
                        <div className={styles.userName}>{u.name}</div>
                        <div className={styles.userStatus}>{u.status}</div>
                    </div>
                    <div className={styles.location}>
                        <div className={styles.userCountry}>{'Belarus,'}</div>
                        <div className={styles.userCity}>{'Minsk'}</div>
                    </div>
                </div>
            </div>)}
            <div>
                {maxCount !== 10 && onPageChange('<')}
                {pages.map(page => {
                    if (page <= maxCount && page > maxCount - 10) {
                        return (
                            <span key={page}
                                  onClick={() => getUsersFromAPI(page)}
                                  className={currentPage === page ? `${styles.page} ${styles.selectedPage}` : `${styles.page}`}>{page}</span>
                        )
                    }
                })}
                {maxCount !== pages[pages.length - 1] && onPageChange('>')}

            </div>
        </div>
    )
}
export default Users