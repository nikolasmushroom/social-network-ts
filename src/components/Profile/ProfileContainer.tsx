import React, {ComponentType} from "react";
import classes from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    setUserProfileActionCreator, updateUserStatus
} from "../Redux/profile-reducer";
import {RootReduxStateType} from "../Redux/redux-store";
import {ProfileType} from "../Redux/store";
import {withRouter} from "../HOC/WithRouter";
import {withAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";

export type ProfileContainerPropsType = {
    getUserProfile: (userId: string, isAuth : boolean) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    status: string
    isAuth: boolean,
    isLoading: boolean
    profile: ProfileType
    params?: { [key: string]: string }
}

class ProfileContainer extends React.Component <ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.params?.userId
        if (!userId) {
            userId = '31705'
        }

        this.props.getUserProfile(userId, this.props.isAuth);
        this.props.getUserStatus(userId)
    }


    render() {
        return (
            <div className={classes.content}>
                <Profile profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
            </div>
        )
    }
}

const mapStateToProps = (state: RootReduxStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
export default compose<ComponentType>(
    connect(mapStateToProps, {setUserProfileActionCreator, getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)