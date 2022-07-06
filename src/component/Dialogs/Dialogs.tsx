import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {RootStateType} from "../../redux/State";
/*/!*import {DialogsDataType, MessageDataType} from "../../App";*!/
import {RootStateType} from "../../redux/State";*/


type DialogsPropsType = {
    state:RootStateType

    /*state:RootStateType*/
}


export const Dialogs = (props:DialogsPropsType) => {
    /*   let dialogsData = [
           {id: 1, name: 'Dimych'},
           {id: 2, name: 'Sveta'},
           {id: 3, name: 'Maksim'},
           {id: 4, name: 'Anna'},
           {id: 5, name: 'Helena'},
           {id: 6, name: 'Maksim'},
       ]
       let messagesData = [
           {id: 1, message: 'Hello'},
           {id: 2, message: 'How are you?'},
           {id: 3, message: 'Hi!'},
           {id: 4, message: 'Yo!'},
           {id: 5, message: 'Yo!!!'},
       ]*/
    let dialogsElements = props.state.ProfilePage.dialogs.map((d) => {
        <DialogItem key={d.id} name={d.name} id={d.id}/>
    });
    let messageElements = props.state.MessagePage.messages.map(m => <Message key={m.id} message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={'Sveta'} id={2}/>
                <DialogItem name={'Maksim'} id={3}/>
                <DialogItem name={'Anna'} id={4}/>
                <DialogItem name={'Helena'} id={5}/>
                <DialogItem name={'Maksim'} id={6}/>*/}

            </div>
            <div className={s.messages}>
                {messageElements}
                {/* <Message message={messagesData[0].message}/>
                <Message message={'How are you?'}/>
                <Message message={'Hi!'}/>
                <Message message={'Yo!'}/>
                <Message message={'Yo!'}/>*/}

            </div>
        </div>
    )
}