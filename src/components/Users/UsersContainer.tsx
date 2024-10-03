import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {RootReduxStateType} from "../Redux/redux-store";
import {UserType} from "../Redux/store";
import styles from './Users.module.css'
import {
    setCurrentPage,
    setMaxCount,
    setTotalUsersCount,
    setUsers,
    toggleFollow,
    toggleIsFetching,
} from "../Redux/users-reducer";
import Users from "./Users";
import {Preloader} from "../common/Preloader";

export type UsersClassPropsType = {
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
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersClassPropsType> {
    getUsers = (page: number) => {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials : true})
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
            .finally(() => {
                this.props.toggleIsFetching(false);
            })
    }
    componentDidMount = () => {
        {
            !this.props.users.length && this.getUsers(this.props.currentPage)
        }
    }

    render() {
        const getUsersFromAPI = (page: number) => {
            this.props.setCurrentPage(page);
            this.getUsers(page)
        }
        return (
            <>
                {this.props.isFetching &&
                    <Preloader className={styles.loading}/>
                }
                {!this.props.isFetching &&
                    <Users users={this.props.users}
                           setUsers={this.props.setUsers}
                           totalUsersCount={this.props.totalUsersCount}
                           setTotalUsersCount={this.props.setTotalUsersCount}
                           maxCount={this.props.maxCount}
                           setMaxCount={this.props.setMaxCount}
                           currentPage={this.props.currentPage}
                           setCurrentPage={this.props.setCurrentPage}
                           pageSize={this.props.pageSize}
                           toggleFollow={this.props.toggleFollow}
                           getUsersFromAPI={getUsersFromAPI}
                    />
                }

            </>

        )
    }
}

const mapStateToProps = (state: RootReduxStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage?.pageSize,
        totalUsersCount: state.usersPage?.totalUsersCount,
        currentPage: state.usersPage?.currentPage,
        isFetching: state.usersPage?.isFetching,
        maxCount: state.usersPage?.maxCount
    }
}
export default connect(mapStateToProps, {
    toggleFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setMaxCount,
    toggleIsFetching,
})(UsersContainer);