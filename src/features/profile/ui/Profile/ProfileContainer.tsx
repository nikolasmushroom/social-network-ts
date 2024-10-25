import React, {ComponentType} from "react";
import classes from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus, savePhoto,
    setUserProfileActionCreator, updateUserStatus
} from "../../model/profile-reducer";
import {RootReduxStateType} from "../../../../app/store/redux-store";
import {ProfileType} from "../../../../app/store/store";
import {withRouter} from "../../../../common/components/HOC/WithRouter";
import {withAuthRedirect} from "../../../../common/components/HOC/WithAuthRedirect";
import {compose} from "redux";
import {withNavigate} from "../../../../common/components/HOC/withNavigate";

export type ProfileContainerPropsType = {
    getUserProfile: (userId: string, isAuth : boolean) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    status: string
    isAuth: boolean,
    isLoading: boolean
    profile: ProfileType
    params: { [key: string]: string }
    authorizedUserId: string,
    navigate: (path : string) => void
    savePhoto: (file: any) => void
}

class ProfileContainer extends React.Component <ProfileContainerPropsType> {
    refreshProfilePage(){
        let userId = this.props.params.userId
        if(!userId){
            userId = this.props.authorizedUserId
        }
        if(!this.props.authorizedUserId && !userId){
            return this.props.navigate('/login')
        }
        this.props.getUserProfile(userId, this.props.isAuth);
        this.props.getUserStatus(userId)
    }
    componentDidMount() {
        this.refreshProfilePage()
    }
    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>) {
        if(this.props.params.userId !== prevProps.params.userId){
            this.refreshProfilePage()
        }
    }

    render() {
        return (
            <div className={classes.content}>
                <Profile
                    isOwner={!this.props.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                    savePhoto={this.props.savePhoto}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: RootReduxStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}
export default compose<ComponentType>(
    connect(mapStateToProps, {setUserProfileActionCreator, getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    withRouter,
    withNavigate,
    withAuthRedirect
)(ProfileContainer)