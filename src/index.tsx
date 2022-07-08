import state, {addPosts, RootStateType, subscribe, updateNewPost} from "./redux/State";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

 const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} addPosts={addPosts} updateNewPost={updateNewPost}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
subscribe(rerenderEntireTree)
