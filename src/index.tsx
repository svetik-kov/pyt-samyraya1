import state, {store/*addPosts, RootStateType, subscribe, updateNewPost*/} from "./redux/State";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

 const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}

     />,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
