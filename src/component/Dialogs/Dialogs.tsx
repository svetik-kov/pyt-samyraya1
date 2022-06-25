import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' '+ s.active}>
                    <NavLink to={'/dialogs/1'}>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink  to={'/dialogs/2'}>Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}>Maksim</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}>Anna</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}> Hello</div>
                <div className={s.message}> How are you?</div>
                <div className={s.message}> Hi</div>
            </div>
        </div>
    )
}