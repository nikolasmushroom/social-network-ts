import {UserType} from "../Redux/store";
import styles from './Users.module.css'
import {v1} from "uuid";
import avatar from "../../asserts/avatars/AvatarPhoto.jpg";

export type UsersPropsType = {
    users: UserType[]
    toggleFollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}
const Users = ({users, toggleFollow, setUsers}: UsersPropsType) => {
    if(!users.length){
        setUsers([
            {
                id: v1(),
                image: avatar,
                followed: true,
                status: 'I very good',
                name: 'Vlad K.',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                image: avatar,
                followed: true,
                status: 'I like donats',
                name: 'Viktor L.',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                image: avatar,
                followed: true,
                status: 'i like sport',
                name: 'Andreas L.',
                location: {city: 'Cologne', country: 'Germany'}
            },
            {
                id: v1(),
                image: avatar,
                followed: false,
                status: 'I like books',
                name: 'Jaume M-S.',
                location: {city: 'Madrid', country: 'Spain'}
            },
        ])
    }
    return (
        <div className={styles.users}>
            {users.map(u => <div className={styles.user}>
                <div className={styles.imageAndButton}>
                    <img src={u.image} alt="avatar"/>
                    <button onClick={() => toggleFollow(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                </div>
                <div className={styles.userProfile}>
                    <div className={styles.nameAndStatus}>
                        <div className={styles.userName}>{u.name}</div>
                        <div className={styles.userStatus}>{u.status}</div>
                    </div>
                    <div className={styles.location}>
                        <div className={styles.userCountry}>{u.location.country},</div>
                        <div className={styles.userCity}>{u.location.city}</div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
export default Users