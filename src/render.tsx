import {addPosts, RootStateType, updateNewPost} from "./redux/State";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App state={state} addPosts={addPosts} updateNewPost={updateNewPost}/>,
        document.getElementById('root')
    );
}



