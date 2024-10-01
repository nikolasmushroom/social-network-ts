import React from "react";
import classes from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileActionCreator} from "../Redux/profile-reducer";
import {RootReduxStateType} from "../Redux/redux-store";
import {ProfileType} from "../Redux/store";
export type ProfileContainerPropsType = {
    setUserProfileActionCreator : (profile : ProfileType) => void
    profile? : ProfileType
}
class  ProfileContainer extends React.Component <ProfileContainerPropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfileActionCreator(response.data)
            })
    }

    render() {
        return (
            <div className={classes.content}>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
    
}
const mapStateToProps = (state : RootReduxStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {setUserProfileActionCreator})(ProfileContainer)