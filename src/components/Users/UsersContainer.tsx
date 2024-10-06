import React from "react";
import {connect} from "react-redux";
import {RootReduxStateType} from "../Redux/redux-store";
import {UserType} from "../Redux/store";
import styles from './Users.module.css'
import {
    changeFollowStatus,
    getUsers,
    setCurrentPage,
    setMaxCount,
    toggleFollow,
    toggleIsFollowingProgress,
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
    setCurrentPage: (page: number) => void
    setMaxCount: (newCount: number) => void
    isFetching: boolean
    toggleIsFollowingProgress: (isFollowing : boolean, userId: string) => void
    followingInProgress: Array<string>,
    getUsers: (currentPage : number, pageSize : number) => void,
    changeFollowStatus: (u : UserType, followStatus : boolean) => void

}

class UsersContainer extends React.Component<UsersClassPropsType> {
    componentDidMount = () => {
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    componentDidUpdate(prevProps: Readonly<UsersClassPropsType>) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching &&
                    <Preloader className={styles.loading}/>
                }
                {!this.props.isFetching &&
                    <Users users={this.props.users}
                           totalUsersCount={this.props.totalUsersCount}
                           maxCount={this.props.maxCount}
                           setMaxCount={this.props.setMaxCount}
                           currentPage={this.props.currentPage}
                           setCurrentPage={this.props.setCurrentPage}
                           pageSize={this.props.pageSize}
                           followingInProgress={this.props.followingInProgress}
                           changeFollowStatus={this.props.changeFollowStatus}
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
        maxCount: state.usersPage?.maxCount,
        followingInProgress: state.usersPage?.followingInProgress
    }
}
export default connect(mapStateToProps, {
    toggleFollow,
    setCurrentPage,
    setMaxCount,
    toggleIsFollowingProgress,
    getUsers,
    changeFollowStatus
})(UsersContainer);