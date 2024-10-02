import React from "react";
import classes from './Header.module.css';
import logo from  '../../asserts/images/logo.png'
import {NavLink} from "react-router-dom";
type HeaderPropsType = {
    isAuth : boolean
    login  :string
}
const Header = ({isAuth, login} : HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo"/>
            <div className={classes.loginBlock}>
                {isAuth ? <div>{login}</div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;