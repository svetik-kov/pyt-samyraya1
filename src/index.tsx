import state, {store/*addPosts, RootStateType, subscribe, updateNewPost*/} from "./redux/State";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

 const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()} addPosts={store.addPosts.bind(store)} updateNewPost={store.updateNewPost.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
