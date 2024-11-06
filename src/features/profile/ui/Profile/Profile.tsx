import React, {useEffect} from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {AppDispatch, RootReduxStateType} from "../../../../app/store/redux-store";
import {getUserProfile, getUserStatus} from "../../model/profile-reducer";

const  Profile= React.memo(() => {
    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const authorizedUserId = useSelector((state : RootReduxStateType) => state.auth.userId)
    const isAuth = useSelector((state : RootReduxStateType) => state.auth.isAuth)

    const refreshProfilePage = () => {
        let userId  = params.userId
        if(!userId){
            userId = authorizedUserId
        }
        if (!isAuth) {
            return navigate('/login')
        }
        if(!authorizedUserId && !userId){
            return navigate('/login')
        }
        dispatch(getUserProfile(userId, isAuth));
        dispatch(getUserStatus(userId));
    }
    useEffect(() => {
        refreshProfilePage()
    }, [params.userId, isAuth])

    return (
        <div className={classes.content}>
            <ProfileInfo isOwner={!params.userId}/>
            <MyPostsContainer/>
        </div>
    )
})

export default Profile