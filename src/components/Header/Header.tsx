import React from "react";
import classes from './Header.module.css';
import logo from  '../../asserts/images/mobile-logo.png'
const Header : React.FC= () => {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo"/>
        </header>
    )
}
export default Header;