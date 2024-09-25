import {UserType} from "../Redux/store";
import styles from './Users.module.css'
import avatar from "../../asserts/avatars/defaultUserImage.png";
import axios from "axios";
import React, {useEffect} from "react";
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
    onPageChanged = (page : number) => {
        this.props.setCurrentPage(page)
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = []
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
                    {pages.map(page => <span key={page}
                        onClick={(e) => {
                            this.onPageChanged(page);
                            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
                                this.props.setUsers(response.data.items)
                            })
                        }}
                        className={this.props.currentPage === page ? styles.selectedPage : ''}>{page}</span>)}
                </div>
            </div>
        )
    }
}

export default Users;