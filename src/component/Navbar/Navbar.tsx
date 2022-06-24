import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar =()=>{
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.activ}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.activ}`}>
                <NavLink to={'/dialogs'} activeClassName={s.activ}>Massages</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a> Setting</a>
            </div>

        </nav>
    )
}
