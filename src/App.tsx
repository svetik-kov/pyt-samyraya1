import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Navbar} from "./component/Navbar/Navbar";
import {Profile} from "./component/Profile/Profile";
import {Dialogs} from "./component/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType, updateNewPost} from "./redux/State";


type AppPropsType = {

    state:RootStateType
    addPosts:(postMessage:string)=>void
    updateNewPost:(newText:string)=>void


}

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
                <Route path={'/profile'} render={()=><Profile state={props.state} addPosts={props.addPosts} updateNewPost={props.updateNewPost} message={props.state.ProfilePage.newText}/>}/>

            </div>


        </div>
        </BrowserRouter>
    )
}

export default App;
