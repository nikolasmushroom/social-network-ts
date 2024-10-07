import React from "react";
import classes from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfileActionCreator} from "../Redux/profile-reducer";
import {RootReduxStateType} from "../Redux/redux-store";
import {ProfileType} from "../Redux/store";
import {withRouter} from "../Redux/WithRouter";
import {Navigate} from "react-router-dom";
import {Preloader} from "../common/Preloader";

export type ProfileContainerPropsType = {
    setUserProfileActionCreator: (profile: ProfileType) => void
    getUserProfile: (userId: string) => void
    isAuth : boolean,
    isLoading: boolean
    profile?: ProfileType
    params?: {[key: string]: string}
}

class ProfileContainer extends React.Component <ProfileContainerPropsType> {
    componentDidMount() {
        let userId =  this.props.params?.userId
        if(!userId){
            userId = '31705'
        }
        this.props.getUserProfile(userId)
    }


    render() {
        if(this.props.isLoading){
            return <Preloader/>
        }
        if (!this.props.isAuth){
            return <Navigate to={'/login'}/>
        }
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
        isAuth: state.auth.isAuth,
        isLoading: state.auth.isLoading
    }
}
export const ProfileWithRouter = withRouter(ProfileContainer)
export default connect(mapStateToProps, {
    setUserProfileActionCreator,
    getUserProfile
})(ProfileWithRouter)