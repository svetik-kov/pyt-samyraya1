import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Navbar} from "./component/Navbar/Navbar";
import {Profile} from "./component/Profile/Profile";
import {Dialogs} from "./component/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/State";


type AppPropsType = {
   /* dialogs: Array<DialogsDataType>
    messages:Array<MessageDataType>
    posts:Array<PostsDataType>*/
    state:RootStateType
}
 /* export type  PostsDataType={
    id: number,
    message: string,
    likesCount: number
}

export type DialogsDataType = {
    id: number,
    name: string
}
export type MessageDataType = {
    id: number,
    message: string
}*/
const App=(props:AppPropsType)=> {


    return (
        <BrowserRouter>
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>

               {/* <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>*/}

                <Route path={'/dialogs'} render={()=><Dialogs state={props.state}/>}/>
                <Route path={'/profile'} render={()=><Profile state={props.state}/>}/>

            </div>


        </div>
        </BrowserRouter>
    )
}

export default App;
