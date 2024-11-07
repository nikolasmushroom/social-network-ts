import React from "react";
import classes from './Header.module.css';
import logo from '../../../asserts/images/logo.png'
import {NavLink} from "react-router-dom";
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootReduxStateType} from "../../../app/store/redux-store";
import {logout} from "../../../features/login/model/auth-reducer";
type HeaderPropsType = {}
const Header = ({} : HeaderPropsType) => {
    const isAuth = useSelector((state : RootReduxStateType) => state.auth.isAuth)
    const login = useSelector((state : RootReduxStateType) => state.auth.login)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo"/>
            <div className={classes.loginBlock}>
                {isAuth ? <div>{login} <Button onClick={() => dispatch(logout())}>Log out</Button> </div>: <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;