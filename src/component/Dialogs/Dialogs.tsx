import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name?: string
    id?: number
    message?:string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/1'}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: DialogItemPropsType) => {
    return (
        <div>
            <div className={s.message}> {props.message}</div>
        </div>
    );
};


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dimych'} id={1}/>
                <DialogItem name={'Sveta'} id={2}/>
                <DialogItem name={'Maksim'} id={3}/>
                <DialogItem name={'Anna'} id={4}/>
                <DialogItem name={'Helena'} id={5}/>
                <DialogItem name={'Maksim'} id={6}/>

            </div>
            <div className={s.messages}>
                <Message message={'Hello'} />
                <Message message={'How are you?'} />
                <Message message={'Hi'} />

            </div>
        </div>
    )
}