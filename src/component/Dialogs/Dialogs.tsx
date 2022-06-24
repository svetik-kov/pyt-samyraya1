import React from "react";
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' '+ s.active}>Dimych</div>
                <div className={s.dialog}>Sveta</div>
                <div className={s.dialog}>Maksim</div>
                <div className={s.dialog}>Anna</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}> Hello</div>
                <div className={s.message}> How are you?</div>
                <div className={s.message}> Hi</div>
            </div>
        </div>
    )
}