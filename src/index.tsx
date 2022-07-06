import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
let postsData = [
    {id: 1,message: 'Hi, how are you?',  likesCount: 14},
    {id: 2, message: 'It is my first post', likesCount: 30},
    {id: 3, message: 'It is my second post', likesCount: 103}
]
ReactDOM.render(
    <App posts={postsData}/>,
  document.getElementById('root')
);