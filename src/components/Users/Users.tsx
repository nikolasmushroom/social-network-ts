import {UserType} from "../Redux/store";
import styles from './Users.module.css'
import avatar from "../../asserts/avatars/defaultUserImage.png";
import axios from "axios";
import {useEffect} from "react";

export type UsersPropsType = {
    users: UserType[]
    pageSize : number
    totalUsersCount : number
    currentPage : number
    maxCount : number
    toggleFollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setMaxCount : (newCount : number) => void
}
const Users = ({users, toggleFollow, setUsers}: UsersPropsType) => {

    useEffect(() => {
        if(!users.length){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                setUsers(response.data.items)
            })
        }
    }, [])

    return (
        <div className={styles.users}>
            {users.map(u => <div className={styles.user} key={u.id}>
                <div className={styles.imageAndButton}>
                    <img src={u.photos.small ? u.photos.small : avatar} alt="avatar"/>
                    <button onClick={() => toggleFollow(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
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
export default Users