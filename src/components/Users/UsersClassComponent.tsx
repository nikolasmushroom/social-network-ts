import {UserType} from "../Redux/store";
import styles from './Users.module.css'
import avatar from "../../asserts/avatars/defaultUserImage.png";
import axios from "axios";
import React, {useEffect} from "react";
import {UsersPropsType} from "./Users";
class Users extends React.Component<UsersPropsType> {
    constructor(props : UsersPropsType) {
        super(props);
        if (!this.props.users.length) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }
    // componentDidMount() {
    //         if (!this.props.users.length) {
    //             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //                 this.props.setUsers(response.data.items)
    //             })
    //         }
    // }

    render() {
        return (
            <div className={styles.users}>
                {this.props.users.map(u => <div className={styles.user} key={u.id}>
                    <div className={styles.imageAndButton}>
                        <img src={u.photos.small ? u.photos.small : avatar} alt="avatar"/>
                        <button onClick={() => this.props.toggleFollow(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
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
            </div>
        )
    }
}

export default Users;