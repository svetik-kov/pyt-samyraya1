import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/State'
/*let postsData = [
    {id: 1,message: 'Hi, how are you?',  likesCount: 14},
    {id: 2, message: 'It is my first post', likesCount: 30},
    {id: 3, message: 'It is my second post', likesCount: 103}
]
let dialogsData = [
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
ReactDOM.render(
    <App state={state} /*posts={postsData} dialogs={dialogsData} messages={messagesData }*//>,
  document.getElementById('root')
);