import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {RootReduxStateType} from "../../../../app/store/redux-store";
import {UserType} from "../../../../app/store/store";
import styles from './Users.module.css'
import {
    changeFollowStatus,
    requestUsers,
    setCurrentPage,
    toggleFollow,
    toggleIsFollowingProgress,
} from "../../model/users-reducer";
import Users from "./Users";
import {Preloader} from "../../../../common/components/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../model/users-selectors";


export type UsersClassPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    toggleFollow: (userId: string) => void
    setCurrentPage: (page: number) => void
    isFetching: boolean
    toggleIsFollowingProgress: (isFollowing : boolean, userId: string) => void
    followingInProgress: Array<string>,
    requestUsers: (currentPage : number, pageSize : number) => void,
    changeFollowStatus: (u : UserType, followStatus : boolean) => void
}

class UsersContainer extends React.Component<UsersClassPropsType> {
    componentDidMount = () => {
        const {currentPage, pageSize} = this.props
            this.props.requestUsers(currentPage, pageSize);
    }

    componentDidUpdate(prevProps: Readonly<UsersClassPropsType>) {
        const {currentPage, pageSize} = this.props
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.requestUsers(currentPage, pageSize);
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {toggleFollow, setCurrentPage, toggleIsFollowingProgress, requestUsers, changeFollowStatus}),
)(UsersContainer)