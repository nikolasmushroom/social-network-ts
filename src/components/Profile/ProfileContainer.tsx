import React, {ComponentType} from "react";
import classes from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfileActionCreator} from "../Redux/profile-reducer";
import {RootReduxStateType} from "../Redux/redux-store";
import {ProfileType} from "../Redux/store";
import {withRouter} from "../HOC/WithRouter";
import {withAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";

export type ProfileContainerPropsType = {
    setUserProfileActionCreator: (profile: ProfileType) => void
    getUserProfile: (userId: string, isAuth : boolean) => void
    isAuth: boolean,
    isLoading: boolean
    profile?: ProfileType
    params?: { [key: string]: string }
}

class ProfileContainer extends React.Component <ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.params?.userId
        if (!userId) {
            userId = '31705'
        }

        this.props.getUserProfile(userId, this.props.isAuth);
    }


    render() {
        return (
            <div className={classes.content}>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: RootReduxStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}
export default compose<ComponentType>(
    connect(mapStateToProps, {setUserProfileActionCreator, getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)