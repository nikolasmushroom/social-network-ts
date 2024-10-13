import React from "react";
import classes from './Header.module.css';
import logo from  '../../asserts/images/logo.png'
import {NavLink} from "react-router-dom";
import {Button} from "../common/Button";
type HeaderPropsType = {
    isAuth : boolean
    login  : string
    logout? : () => void
}
const Header = ({isAuth, login, logout} : HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo"/>
            <div className={classes.loginBlock}>
                {isAuth ? <div>{login} <Button onClick={logout}>Log out</Button> </div>: <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;