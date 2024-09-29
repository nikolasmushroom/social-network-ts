import styles from './Users.module.css'
import avatar from "../../asserts/avatars/defaultUserImage.png";
import axios from "axios";
import React from "react";
import {UsersPropsType} from "./Users";

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        if (!this.props.users.length) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
        }
    }

    // componentDidUpdate(prevProps: Readonly<UsersPropsType>, prevState: Readonly<{}>, snapshot?: any) {
    //     if(prevProps.currentPage !== this.props.currentPage){
    //         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
    //             this.props.setUsers(response.data.items)
    //         })
    //     }
    // }
    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
    }
    changeMaxCount = (newCount: number) => {
        this.props.setMaxCount(newCount)
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages: Array<number> = []
        const onPageChange = (changeDirection : string) => {
            if(changeDirection === '=>'){
                return <span className={styles.pageChangers} onClick={() => {
                    {
                        this.props.setMaxCount(this.props.maxCount + 10)
                    }
                }}>{changeDirection}</span>
            }
            if(changeDirection === '<='){
                return <span className={styles.pageChangers} onClick={() => {
                    {
                        this.props.setMaxCount(this.props.maxCount - 10)
                    }
                }}>{changeDirection}</span>
            }

        }
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div className={styles.users}>
                {this.props.users.map(u => <div className={styles.user} key={u.id}>
                    <div className={styles.imageAndButton}>
                        <img src={u.photos.small ? u.photos.small : avatar} alt="avatar"/>
                        <button
                            onClick={() => this.props.toggleFollow(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
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
                    {this.props.maxCount !== 10 && onPageChange('<=')}
                    {pages.map(page => {
                        if (page <= this.props.maxCount && page > this.props.maxCount - 10) {
                            return (
                                <span key={page}
                                      onClick={() => {
                                          this.onPageChanged(page);
                                          axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
                                              this.props.setUsers(response.data.items)
                                          })
                                      }}
                                      className={this.props.currentPage === page ? `${styles.page} ${styles.selectedPage}` : `${styles.page}`}>{page}</span>
                            )
                        }
                    })}
                    {this.props.maxCount !== pages[pages.length - 1] && onPageChange('=>')}

                </div>
            </div>
        )
    }
}

export default Users;